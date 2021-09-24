import { Fragment, useState } from 'react'
import Link from 'next/link'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { SiReverbnation, SiSoundcloud } from 'react-icons/si'

import { Header } from './Header'
import Nav from 'components/Layout.tsx/Nav'
import { MobileActiveLink } from './Nav/ActiveLink'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title = 'Home', children }) => {
  let [menus] = useState<string[]>(['about', 'projects', 'writings', 'contact'])

  return (
    <Fragment>
      <Header title={title} />
      <div className='w-full min-h-screen mx-auto max-w-7xl FuturaPT'>
        <main className='md:hidden z-0 bg-[#1D2128]'>
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
        <Nav menus={menus} />
        <main>{children}</main>
        <footer>
          <section>
            <h2>Footer section</h2>
            <p>Footer&apos;s configuration is on progress...</p>
          </section>
        </footer>
      </div>
    </Fragment>
  )
}

export default Layout
