import { useRouter } from 'next/router'
import { motion, AnimateSharedLayout } from 'framer-motion'

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
      <motion.a layout href={href} onClick={handleClick}>
        {children}
      </motion.a>
      {router.asPath === href && (
        <motion.div
          layoutId='underline'
          transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
          className='w-5 mx-auto mt-0.5 border-t'
        />
      )}
    </>
  )
}
