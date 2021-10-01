import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { SiReverbnation } from 'react-icons/si'

import { MobileActiveLink } from './MobileActiveLink'

type Props = {
  menus: string[]
  isOpen: boolean
}

export const MobileNav: React.FC<Props> = (props) => {
  const animation = useAnimation()
  const borderAnimation = useAnimation()

  useEffect(() => {
    if (props.isOpen) {
      animation.start({
        translateY: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.4,
        },
      }),
        borderAnimation.start({
          scale: 1,
          opacity: [0, 1],
          transition: {
            duration: 0.5,
            delay: 0.4,
          },
        })
    }
    if (!props.isOpen) {
      animation.start({
        translateY: -10,
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      }),
        borderAnimation.start({
          scale: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        })
    }
  }, [props.isOpen, animation, borderAnimation])

  return (
    <nav className='z-0 w-full bg-defaultColor md:hidden'>
      <section className='py-12'>
        <motion.div
          animate={animation}
          className='flex items-center justify-center space-x-14'
        >
          <a
            className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
            href='https://www.twitter.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineTwitter className='w-4 h-4 text-amber-300' />
          </a>
          <a
            className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
            href='https://www.github.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineGithub className='w-4 h-4 text-amber-300' />
          </a>
          <a
            className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
            href='https://www.instagram.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineInstagram className='w-4 h-4 text-amber-300' />
          </a>
          <a
            className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
            href='https://www.reverbnation.com/tweleph'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiReverbnation className='w-4 h-4 text-amber-300' />
          </a>
        </motion.div>
      </section>
      <motion.div
        animate={borderAnimation}
        className='w-10/12 mx-auto border-t border-amber-100'
      />
      <ul className='pt-12 pb-16 space-y-8'>
        {props.menus.map((menu) => (
          <motion.li
            animate={animation}
            className='text-center capitalize'
            key={menu}
          >
            <h5 className='font-light tracking-wider'>
              <MobileActiveLink href={`/${menu}`}>{menu}</MobileActiveLink>
            </h5>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

const spring = {
  delay: 0.1,
  type: 'spring',
  stiffness: 400,
  damping: 40,
}
