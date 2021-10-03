import { useEffect, useState } from 'react'
// import { useTheme } from 'next-themes'

import markdownStyles from '../styles/markdown-styles.module.css'

type Props = {
  content: React.ReactNode
}

const PostBody: React.FC<Props> = ({ content }: Props) => {
  // const { theme } = useTheme()

  const [isDark, setIsDark] = useState<boolean | undefined>(undefined)

  // useEffect(() => {
  //   if (theme) {
  //     setIsDark(theme === 'dark' ? true : false)
  //   }
  // }, [theme])

  return (
    <div className={markdownStyles[isDark ? 'markdown-dark' : 'markdown']}>
      {content}
    </div>
  )
}

export default PostBody
