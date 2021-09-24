import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  children: React.ReactNode
  href: string
}

export const ActiveLink: React.FC<Props> = ({
  children,
  href,
}): JSX.Element => {
  const router = useRouter()

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()
    router.push(href)
  }
  return (
    <a href={href} onClick={handleClick}>
      {children}
      {router.asPath === href && (
        <div className='w-5 mx-auto mt-0.5 border-t'></div>
      )}
    </a>
  )
}
