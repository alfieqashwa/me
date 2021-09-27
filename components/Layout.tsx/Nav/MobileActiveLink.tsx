import { useRouter } from 'next/router'

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
      className={`${router.asPath === href ? 'text-coolGray-500' : ''}`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
