import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

type Items = {
  [key: string]: string
}

type Post = {
  data: {
    [key: string]: string
  }
  content: string
}

const postsDirectory = join(process.cwd(), '_writings')

function getSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export function getPost(slug: string): Post {
  const fullPath = join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { data, content }
}

function getPostItems(slug: string, fields: string[] = []): Items {
  const realSlug = slug.replace(/\.mdx?$/, '')
  const { data, content } = getPost(realSlug)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

function getAllPosts(fields: string[] = []): Items[] {
  const slugs = getSlugs()
  const posts = slugs
    .map((slug) => getPostItems(slug, fields))
    // sort posts by pub date in descending order
    .sort((post1, post2) =>
      post1.publishedDate > post2.publishedDate ? -1 : 1
    )

  return posts
}

export { getSlugs, getPostItems, getAllPosts }
