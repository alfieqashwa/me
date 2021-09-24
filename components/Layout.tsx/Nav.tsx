import { useState } from 'react'
import Link from 'next/link'

const LOGO = 'LOGO'

export const Nav: React.FC = (): JSX.Element => {
  let [menus] = useState<string[]>(['about', 'projects', 'writings', 'contact'])

  return (
    <nav className='flex justify-between items-center px-16 z-10 pt-[60px]'>
      <h4 className='transition duration-300 ease-in-out hover:opacity-80'>
        <Link href='/' passHref>
          {LOGO}
        </Link>
      </h4>
      <ul className='flex items-center space-x-12'>
        {menus.map((menu) => (
          <li key={menu}>
            <h6 className='tracking-wider capitalize transition duration-300 ease-in-out hover:opacity-80'>
              <Link href={`/${menu}`}>{menu}</Link>
            </h6>
          </li>
        ))}
      </ul>
    </nav>
  )
}
