import Author from './author'

interface IPost {
  slug: string
  path: string
  coverImage: string
  publishDate: string
  updateDate: string
  title: string
  description: string
  author: Author
  content: string
}

export default IPost
