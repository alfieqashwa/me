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
      className={`px-1.5 py-0.5 rounded-md focus:outline-none focus:ring-2 ring-amber-50 ${
        router.asPath === href ? 'text-amber-300' : 'text-amber-100'
      }`}
    >
      {children}
    </a>
  )
}
