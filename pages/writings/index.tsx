import type { GetStaticProps, NextPage } from 'next'

import Container from 'components/Container'
import HeroPost from 'components/HeroPost'
import Layout from 'components/Layout'
import MorePosts from 'components/MorePosts'
import Pagination from 'components/Pagination'
import usePagination from 'hooks/usePagination'

import IPost from 'types/post'
import { getAllPosts } from 'utils/api'

type Props = {
  allPosts: IPost[]
}

const pageTitle = 'Writings'

const Writings: NextPage<Props> = ({ allPosts }: Props): JSX.Element => {
  console.log(allPosts)
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const { currentPage, currentData, maxPage, setElement } = usePagination(
    morePosts,
    2,
    1.0
  )
  const currentPosts = currentData()

  return (
    <Layout pageTitle='Writings'>
      <Container>
        <h1 className='py-4 my-8 text-6xl font-bold leading-tight tracking-tight text-center border-t border-b md:text-8xl dark:text-gray-100 md:py-8 md:mb-16'>
          {pageTitle}
        </h1>

        {heroPost && (
          <HeroPost
            slug={heroPost.slug}
            title={heroPost.title}
            description={heroPost.description}
            publishDate={heroPost.publishDate}
            updateDate={heroPost.updateDate}
            author={heroPost.author}
            coverImage={heroPost.coverImage}
          />
        )}

        {currentPosts.length > 0 && <MorePosts posts={currentPosts} />}

        <Pagination
          currentPage={currentPage}
          maxPage={maxPage}
          setElement={setElement}
        />
      </Container>
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

  return {
    props: { allPosts },
  }
}
