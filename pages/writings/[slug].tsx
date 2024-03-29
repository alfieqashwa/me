import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { motion } from 'framer-motion'

import Layout from 'components/Layout'
import CustomLink from 'components/CustomLink'
import IPost from 'types/post'
import { getPost, getAllPosts } from 'utils/api'
import { SITE_URL } from 'utils/constants'
import PostTitle from 'components/PostTitle'
// import Container from 'components/Container'
import PostHeader from 'components/PostHeader'
import PostBody from 'components/PostBody'
import Tables from 'components/Tables'
import Code from 'components/Code'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug' | 'content'>
  slug: string
}
const components = {
  a: CustomLink,
  table: Tables.Table,
  pre: Code,
  TestComponent: dynamic(() => import('components/TestComponent')),
  HeroWithQuote: dynamic(() => import('components/HeroWithQuote')),
  Head,
}

const Writing: NextPage<Props> = ({ source, frontMatter, slug }: Props) => {
  const router = useRouter()

  const ogImage = SITE_URL + frontMatter.coverImage

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout pageTitle={frontMatter.title}>
      {router.isFallback ? (
        <PostTitle>Loading...</PostTitle>
      ) : (
        <article className='py-8 mx-auto prose lg:prose-xl prose-yellow lg:py-16'>
          <Head>
            <meta
              name='description'
              content={frontMatter.description}
              key='description'
            />
            <meta
              property='og:description'
              content={frontMatter.description}
              key='ogDescription'
            />
            <meta property='og:image' content={ogImage} key='ogImage' />
          </Head>

          <PostHeader
            title={frontMatter.title}
            coverImage={frontMatter.coverImage}
            author={frontMatter.author}
            publishDate={frontMatter.publishDate}
            updateDate={frontMatter.updateDate}
          />

          <PostBody
            content={
              <MDXRemote
                {...source}
                components={components}
                scope={{ motion }}
              />
            }
          />
        </article>
      )}
    </Layout>
  )
}

export default Writing

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string)

  const mdxSource = await serialize(content, {
    scope: data,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      // remarkPlugins: [prism], // TODO
      rehypePlugins: [],
    },
  })

  const slug = params?.slug

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
