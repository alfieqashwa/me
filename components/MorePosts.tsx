import PostPreview from './PostPreview'
import IPost from 'types/post'

type Props = {
  posts: IPost[]
}

const MorePosts: React.FC<Props> = ({ posts }: Props) => {
  if (!posts) return null

  // const postPairs = posts.reduce((result, _value, index, array) => {
  //   if (index % 2 === 0) {
  //     result.push(array.slice(index, index + 2))
  //   }
  //   return result
  // }, Array()) // ! I changed [] -> Array() to makes typescript happy

  return (
    <section>
      <h2 className='mb-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl dark:text-gray-100'>
        More Posts
      </h2>

      <div className='grid grid-cols-1 gap-16 mb-16 lg:grid-cols-2'>
        {posts.map((post, index) => {
          return (
            <PostPreview
              key={index}
              slug={post.slug}
              title={post.title}
              description={post.description}
              publishDate={post.publishDate}
              updateDate={post.updateDate}
              author={post.author}
              coverImage={post.coverImage}
            />
          )
        })}
      </div>
    </section>
  )
}

export default MorePosts
