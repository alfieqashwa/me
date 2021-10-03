import type { GetStaticProps, NextPage } from 'next'

import Layout from 'components/Layout'
import { ExampleComponent } from 'components/ExampleComponent'

import IPost from 'types/post'
import { getAllPosts } from 'utils/api'

type Props = {
  allPosts: IPost[]
}

const Writings: NextPage<Props> = ({ allPosts }: Props): JSX.Element => {
  console.log(allPosts)
  return (
    <Layout pageTitle='Writings'>
      <section className='grid min-h-screen place-items-center'>
        <ExampleComponent title='writings' />
        <article>Articles section</article>
        <p>
          Click the link below to navigate to a page generated by{' '}
          <code>next-mdx-remote</code>.
        </p>
        <ul>
          {allPosts[0] &&
            allPosts.map((p) => (
              <li key={p.slug}>
                <pre>{JSON.stringify(p, null, 2)}</pre>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  )
}
export default Writings

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'slug',
    'coverImage',
    'publishDate',
    'updateDate',
    'title',
    'description',
    'author',
  ])
  return { props: { allPosts } }
}
