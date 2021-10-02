import fs from 'fs'
import path from 'path'

// WRITINGS_PATH is useful when you want to get the path to a specific file
export const WRITINGS_PATH = path.join(process.cwd(), '_writings')

// writingFilePaths is the list of all mdx files inside the WRITINGS_PATH directory
export const writingFilePaths = fs
  .readdirSync(WRITINGS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
