import React, { Fragment, useEffect, useState } from 'react'
import { MenuAlt4Icon } from '@heroicons/react/outline'
import { useAnimation, motion } from 'framer-motion'

import { Header } from './Header'
import Nav from 'components/Layout.tsx/Nav'
import Footer from 'components/Layout.tsx/Footer'
import { MobileNav } from './Nav/MobileNav'
import { MobileLogo } from './Nav/Logo'

import { MENU_LIST } from 'constants/menu-list'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title = 'Home', children }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const animation = useAnimation()

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  useEffect(() => {
    if (!isToggled) {
      animation.start({
        translateY: -452,
        transition: {
          // type: 'spring',
          stiffness: 900,
          // damping: 70,
          // delay: 0.2,
          ease: 'easeOut',
          duration: 0.7,
        },
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
      <div className='relative w-full md:max-w-7xl FuturaPT'>
        {/* // * Start Mobile View */}

        <div className='w-full -pt-10 md:hidden'>
          <MobileNav menus={MENU_LIST} isToggled={isToggled} />
          <motion.section
            initial={false}
            animate={animation}
            className='z-20 bg-black pb-7 border-t-[1px] border-amber-100 border-transparent shadow-lg rounded-t-3xl'
          >
            <div className='flex items-center px-8 md:px-16 justify-between pt-[60px]'>
              <MobileLogo isToggled={isToggled} setIsToggled={setIsToggled} />
              <button
                className='px-1 py-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
                onClick={handleToggle}
              >
                <MenuAlt4Icon className='w-6 h-6 text-amber-100' />
              </button>
            </div>
            <main className='z-10 px-8 '>{children}</main>
          </motion.section>
        </div>
        {/* // * Ends Mobile View */}

        {/* // * Start Desktop View */}
        <div className='hidden md:block'>
          <Nav menus={MENU_LIST} />
          <main className='z-10'>{children}</main>
        </div>
        {/* // * Ends Desktop View */}

        <Footer menus={MENU_LIST} />
      </div>
    </Fragment>
  )
}

export default Layout

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 70,
  // stiffness: 900,
  // ease: 'easeInOut',
}
