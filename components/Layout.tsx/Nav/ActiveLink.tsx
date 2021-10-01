import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

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
    <>
      <motion.a
        layout
        href={href}
        onClick={handleClick}
        className='px-1.5 py-0.5 rounded-md focus:outline-none'
      >
        {children}
      </motion.a>
      {router.asPath === href && (
        <motion.div
          layoutId='underline'
          transition={spring}
          className='w-6 mx-auto mt-0.5 border-t border-amber-100'
        />
      )}
    </>
  )
}

const spring = {
  delay: 0.1,
  type: 'spring',
  stiffness: 400,
  damping: 40,
}
