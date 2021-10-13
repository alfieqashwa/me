import React, { useEffect, useState } from 'react'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline'
import { useAnimation, motion } from 'framer-motion'

import { Header } from './Header'
import { DesktopNavigation, MobileNavigation } from 'components/Navigation'
import { DesktopFooter, MobileFooter } from 'components/Footer'
import { MobileLogo } from './Logo'

import { MENU_LIST } from 'utils/constants/menu-list'

type Props = {
  pageTitle: string
  hasRepo?: boolean
  postPath?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({
  pageTitle,
  hasRepo,
  postPath,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const animation = useAnimation()

  const toggleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (!isOpen) {
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
    if (isOpen) {
      animation.start({
        translateY: -20,
        transition: spring,
      })
    }
  }, [isOpen, animation])

  return (
    <div className='bg-[#101216]'>
      <Header pageTitle={pageTitle} />
      <div className='relative w-full lg:max-w-6xl md:mx-auto FuturaPT'>
        {/* // * Start Mobile View */}
        <div className='w-full -pt-10 md:hidden'>
          <MobileNavigation menus={MENU_LIST} isOpen={isOpen} />
          <motion.section
            initial={false}
            animate={animation}
            className='z-20 bg-[#101216] pb-7 border-t-[1px] border-amber-100 border-transparent shadow-lg rounded-t-3xl'
          >
            <div className='flex items-center px-8 md:px-16 justify-between pt-[60px]'>
              <MobileLogo isToggled={isOpen} setIsToggled={setIsOpen} />
              <button
                className='px-1 py-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
                onClick={toggleClick}
              >
                {!isOpen ? (
                  <MenuAlt4Icon className='w-6 h-6 text-amber-50' />
                ) : (
                  <XIcon className='w-6 h-6 text-amber-50' />
                )}
              </button>
            </div>
            <main className='z-10 px-8'>{children}</main>
          </motion.section>
        </div>
        {/* // * Ends Mobile View */}

        {/* // * Start Desktop View */}
        <div className='hidden md:max-w-2xl lg:max-w-6xl md:mx-auto md:block'>
          <DesktopNavigation menus={MENU_LIST} />
          <main className='z-10'>{children}</main>
        </div>
        {/* // * Ends Desktop View */}

        <MobileFooter menus={MENU_LIST} />
      </div>
      <DesktopFooter menus={MENU_LIST} />
    </div>
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
