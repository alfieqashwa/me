import { useRouter } from 'next/router'
import React from 'react'

type MobileProps = {
  children: React.ReactNode
  href: string
}

export const MobileActiveLink: React.FC<MobileProps> = ({
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
    <a
      href={href}
      onClick={handleClick}
      className={`${router.asPath === href ? 'text-coolGray-500' : ''}`}
    >
      {children}
    </a>
  )
}