import React, { Fragment, useState } from 'react'

import { Header } from './Header'
import Nav from 'components/Layout.tsx/Nav'
import Footer from 'components/Layout.tsx/Footer'
import { MobileNav } from './Nav/MobileNav'
import { Logo } from './Nav/Logo'
import { MenuAlt4Icon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title = 'Home', children }) => {
  let [menus] = useState<string[]>(['about', 'projects', 'writings', 'contact'])
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const handleToggle = () => {
    setIsToggled((prev) => !prev)
  }

  const toggledVariants = {
    close: {
      y: -467,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    open: {
      y: -20,
      transition: {
        duration: 0.5,
        stiffness: 900,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <Fragment>
      <Header title={title} />
      <div className='relative w-full mx-auto max-w-7xl FuturaPT'>
        <MobileNav menus={menus} />
        <Nav menus={menus} />

        {/* // * Start Mobile View */}
        <div className='-pt-10 md:hidden'>
          <motion.section
            variants={toggledVariants}
            initial='close'
            animate={`${isToggled ? 'open' : 'close'}`}
            className='z-20 bg-black shadow-lg rounded-t-3xl'
          >
            <div className='flex items-center px-16 justify-between pt-[60px]'>
              <Logo />
              <button onClick={handleToggle}>
                <MenuAlt4Icon className='w-6 h-6' />
              </button>
            </div>
            <main className='z-10'>{children}</main>
          </motion.section>
        </div>
        {/* // * Ends Mobile View */}

        {/* // * Start Desktop View */}
        <div className='hidden md:block'>
          <main className='z-10'>{children}</main>
        </div>
        {/* // * Ends Desktop View */}

        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
