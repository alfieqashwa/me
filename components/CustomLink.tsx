import Link from 'next/link'

type Props = {
  href: string
  isBlank?: true
  className?: string
  'aria-label'?: string
  onClick?: () => void
  children?: React.ReactNode
}

const CustomLink: React.FC<Props> = ({
  href,
  isBlank,
  children,
  ...rest
}: Props) => {
  return (
    <>
      {isBlank ? (
        <a href={href} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a {...rest}>{children}</a>
        </Link>
      )}
    </>
  )
}

export default CustomLink
