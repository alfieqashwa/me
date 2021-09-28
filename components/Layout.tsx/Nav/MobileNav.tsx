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
  isToggled: boolean
}

export const MobileNav: React.FC<Props> = (props) => {
  const animation = useAnimation()
  const borderAnimation = useAnimation()

  useEffect(() => {
    if (props.isToggled) {
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
    if (!props.isToggled) {
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
  }, [props.isToggled, animation, borderAnimation])

  return (
    <nav className='z-0 w-full bg-defaultColor md:hidden'>
      <section className='py-12'>
        <motion.div
          animate={animation}
          className='flex items-center justify-center space-x-14'
        >
          <a
            href='https://www.twitter.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineTwitter className='w-4 h-4' />
          </a>
          <a
            href='https://www.github.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineGithub className='w-4 h-4' />
          </a>
          <a
            href='https://www.instagram.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineInstagram className='w-4 h-4' />
          </a>
          <a
            href='https://www.reverbnation.com/tweleph'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiReverbnation className='w-4 h-4' />
          </a>
        </motion.div>
      </section>
      <motion.div
        animate={borderAnimation}
        className='w-10/12 mx-auto border-t border-gray-600'
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
