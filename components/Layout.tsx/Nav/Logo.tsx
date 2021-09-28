import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
const LOGO = 'LOGO'

type Props = {
  isToggled: boolean
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
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
    <>
      {props.isToggled ? (
        <motion.h4
          onClick={() => props.setIsToggled(!props.isToggled)}
          className='transition duration-300 ease-in-out hover:opacity-80'
        >
          <Link href='/' passHref>
            {LOGO}
          </Link>
        </motion.h4>
      ) : (
        <motion.h4 className='transition duration-300 ease-in-out hover:opacity-80'>
          <Link href='/' passHref>
            {LOGO}
          </Link>
        </motion.h4>
      )}
    </>
  )
}
