import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { SiReverbnation } from 'react-icons/si'

import { Header } from './Header'
import Nav from 'components/Layout.tsx/Nav'
import { MobileActiveLink } from './Nav/ActiveLink'
import Footer from 'components/Layout.tsx/Footer'
import { MobileNav } from './Nav/MobileNav'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title = 'Home', children }) => {
  let [menus] = useState<string[]>(['about', 'projects', 'writings', 'contact'])
  const [isToggled, setIsToggled] = useState<boolean>(false)

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
    <Fragment>
      <Header title={title} />
      <div className='relative w-full min-h-screen mx-auto max-w-7xl FuturaPT'>
        <main className='w-full md:hidden bg-[#1D2128]'>
          <section className='py-12'>
            <div className='flex items-center justify-center space-x-14'>
              <AiOutlineTwitter className='w-4 h-4' />
              <AiOutlineGithub className='w-4 h-4' />
              <AiOutlineInstagram className='w-4 h-4' />
              <SiReverbnation className='w-4 h-4' />
            </div>
          </section>
          <div className='w-10/12 mx-auto border-t border-gray-600'></div>
          <ul className='py-12 space-y-8'>
            {menus.map((menu) => (
              <li className='text-center capitalize' key={menu}>
                <h5 className='font-light tracking-wider'>
                  <MobileActiveLink href={`/${menu}`}>{menu}</MobileActiveLink>
                </h5>
              </li>
            ))}
          </ul>
        </main>
        <motion.div
          className='z-10 bg-black rounded-t-3xl'
          variants={toggledVariants}
          initial='close'
          animate={`${isToggled ? 'open' : 'close'}`}
        >
          <Nav menus={menus} />
          <MobileNav isToggled={isToggled} setIsToggled={setIsToggled} />
          <main>{children}</main>
        </motion.div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout

// <main className='md:hidden  z-0 bg-[#1D2128]'>
//   <section className='py-12'>
//     <div className='flex items-center justify-center space-x-14'>
//       <AiOutlineTwitter className='w-4 h-4' />
//       <AiOutlineGithub className='w-4 h-4' />
//       <AiOutlineInstagram className='w-4 h-4' />
//       <SiReverbnation className='w-4 h-4' />
//     </div>
//   </section>
//   <div className='w-10/12 mx-auto border-t border-gray-600'></div>
//   <ul className='py-12 space-y-8'>
//     {menus.map((menu) => (
//       <li className='text-center capitalize' key={menu}>
//         <h5 className='font-light tracking-wider'>
//           <MobileActiveLink href={`/${menu}`}>{menu}</MobileActiveLink>
//         </h5>
//       </li>
//     ))}
//   </ul>
// </main>
