import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
const LOGO = 'LOGO'

type Props = {
  isToggled: boolean
}

export const DesktopLogo: React.FC = (): JSX.Element => {
  return (
    <h4 className='transition duration-300 ease-in-out hover:opacity-80'>
      <Link href='/' passHref>
        {LOGO}
      </Link>
    </h4>
  )
}

export const MobileLogo: React.FC<Props> = (props): JSX.Element => {
  return (
    <motion.h4 className='transition duration-300 ease-in-out hover:opacity-80'>
      <Link href='/' passHref>
        {LOGO}
      </Link>
    </motion.h4>
  )
}
