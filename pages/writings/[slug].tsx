import fs from 'fs'
import path from 'path'
import type { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import CustomLink from 'components/CustomLink'
import { writingFilePaths, WRITINGS_PATH } from 'utils/mdxUtils'
import matter from 'gray-matter'
import Layout from 'components/Layout'

type WritingPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: {
    title: string
    description: string
  }
}

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,

  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('components/TestComponent')),
  HeroWithQuote: dynamic(() => import('components/HeroWithQuote')),
  Head,
}

export default function WritingPage({ source, frontMatter }: WritingPageProps) {
  return (
    <Layout title={frontMatter.title}>
      <header>
        <nav>
          <Link href='/writings'>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className='post-header'>
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className='description'>{frontMatter?.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const writingFilePath = path.join(WRITINGS_PATH, `${params?.slug}.mdx`)
  const source = fs.readFileSync(writingFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
  // revalidate: 1
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = writingFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static object rewuired by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
