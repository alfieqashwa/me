import { Fragment, useState } from 'react'
import { MenuAlt4Icon } from '@heroicons/react/outline'

import { ActiveLink } from './ActiveLink'
import { Logo } from './Logo'

const Nav: React.FC<{ menus: string[] }> = (props): JSX.Element => {
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const toggled = () => {
    setIsToggled(!isToggled)
  }

  return (
    <Fragment>
      {/* // * desktop view */}
      <div className='hidden md:block'>
        <nav className='flex justify-between items-center px-16 z-10 pt-[60px]'>
          <Logo />
          <ul className='flex items-center space-x-12'>
            {props.menus.map((menu) => (
              <li key={menu}>
                <h6 className='tracking-wider capitalize transition duration-300 ease-in-out hover:opacity-80'>
                  <ActiveLink href={`/${menu}`}>{menu}</ActiveLink>
                </h6>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* // * mobile view */}
      <div className='md:hidden'>
        <main className='flex items-center px-16 z-10 justify-between pt-[60px]'>
          <Logo />
          <button onClick={toggled}>
            <MenuAlt4Icon className='w-5 h-5' />
            <pre>{JSON.stringify(isToggled, null, 2)}</pre>
          </button>
        </main>
      </div>
    </Fragment>
  )
}
export default Nav
