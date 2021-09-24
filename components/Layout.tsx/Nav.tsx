import { useState } from 'react'
import Link from 'next/link'

export const Nav = () => {
  let [menus] = useState<string[]>(['about', 'projects', 'writings', 'contact'])
  return (
    <nav className='flex justify-between px-16 z-10 pt-[60px]'>
      <h4>
        <Link href='/' passHref>
          Logo
        </Link>
      </h4>
      <ul className='flex space-x-12'>
        {menus.map((menu) => (
          <li key={menu}>
            <h6 className='font-extrabold tracking-wider capitalize transition duration-300 ease-in-out shadowr hover:opacity-80'>
              <Link href={`/${menu}`}>{menu}</Link>
            </h6>
          </li>
        ))}
      </ul>
    </nav>
  )
}
