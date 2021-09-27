import React, { Fragment, useState } from 'react'

import { Header } from './Header'
import Nav from 'components/Layout.tsx/Nav'
import Footer from 'components/Layout.tsx/Footer'
import { MobileNav } from './Nav/MobileNav'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title = 'Home', children }) => {
  let [menus] = useState<string[]>(['about', 'projects', 'writings', 'contact'])
  const [isToggled, setIsToggled] = useState<boolean>(false)

  return (
    <Fragment>
      <Header title={title} />
      <div className='relative w-full mx-auto max-w-7xl FuturaPT'>
        <MobileNav
          menus={menus}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
        />
        <Nav menus={menus} />
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
