import React, { Fragment, useEffect, useState } from 'react'
import { MenuAlt4Icon } from '@heroicons/react/outline'
import { useAnimation, motion } from 'framer-motion'

import { Header } from './Header'
import Nav from 'components/Layout.tsx/Nav'
import Footer from 'components/Layout.tsx/Footer'
import { MobileNav } from './Nav/MobileNav'
import { MobileLogo } from './Nav/Logo'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title = 'Home', children }) => {
  let [menus] = useState<string[]>(['about', 'projects', 'writings', 'contact'])
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const animation = useAnimation()

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  useEffect(() => {
    if (!isToggled) {
      animation.start({
        translateY: -467,
        transition: spring,
      })
    }
    if (isToggled) {
      animation.start({
        translateY: -20,
        transition: spring,
      })
    }
  }, [isToggled, animation])

  return (
    <Fragment>
      <Header title={title} />
      <div className='relative w-full mx-auto max-w-7xl FuturaPT'>
        <Nav menus={menus} />

        {/* // * Start Mobile View */}
        <div className='-pt-10 md:hidden'>
          <MobileNav menus={menus} />
          <motion.section
            animate={animation}
            className='z-20 bg-black shadow-lg rounded-t-3xl'
          >
            <div className='flex items-center px-16 justify-between pt-[60px]'>
              <MobileLogo isToggled={isToggled} setIsToggled={setIsToggled} />
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

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 70,
  // delay: 0.05,
  // stiffness: 900,
  // ease: 'easeInOut',
}
