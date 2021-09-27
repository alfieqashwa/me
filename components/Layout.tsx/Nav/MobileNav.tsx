import { MenuAlt4Icon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { SiReverbnation } from 'react-icons/si'

import { Logo } from './Logo'
import { MobileActiveLink } from './MobileActiveLink'

type Props = {
  menus: string[]
  isToggled: boolean
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileNav: React.FC<Props> = (props) => {
  const handleToggle = () => {
    props.setIsToggled((prev) => !prev)
  }

  const toggledVariants = {
    close: {
      y: -435,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className='md:hidden'>
      <nav className='w-full  bg-[#1D2128]'>
        <section className='py-12'>
          <div className='flex items-center justify-center space-x-14'>
            <AiOutlineTwitter className='w-4 h-4' />
            <AiOutlineGithub className='w-4 h-4' />
            <AiOutlineInstagram className='w-4 h-4' />
            <SiReverbnation className='w-4 h-4' />
          </div>
        </section>
        <div className='w-10/12 mx-auto border-t border-gray-600' />
        <ul className='py-12 space-y-8'>
          {props.menus.map((menu) => (
            <li className='text-center capitalize' key={menu}>
              <h5 className='font-light tracking-wider'>
                <MobileActiveLink href={`/${menu}`}>{menu}</MobileActiveLink>
              </h5>
            </li>
          ))}
        </ul>
      </nav>
      <motion.section
        className='z-10 min-h-screen bg-black md:min-h-0 rounded-t-3xl'
        variants={toggledVariants}
        initial='close'
        animate={`${props.isToggled ? 'open' : 'close'}`}
      >
        <div className='flex items-center px-16 z-10 justify-between pt-[60px]'>
          <Logo />
          <button onClick={handleToggle}>
            <MenuAlt4Icon className='w-6 h-6' />
          </button>
        </div>
      </motion.section>
    </div>
  )
}
