import { motion } from 'framer-motion'
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
        <a className='px-1 py-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'>
          {LOGO}
        </a>
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
            <a className='px-1 py-0.5 rounded-md focus:outline-none focus:ring-2 ring-amber-50'>
              {LOGO}
            </a>
          </Link>
        </motion.h4>
      ) : (
        <motion.h4 className='transition duration-300 ease-in-out hover:opacity-80'>
          <Link href='/'>
            <a className='px-1 py-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'>
              {LOGO}
            </a>
          </Link>
        </motion.h4>
      )}
    </>
  )
}
