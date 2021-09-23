import { useState } from 'react'

export const Nav = () => {
  let [menus] = useState<string[]>(['about', 'projects', 'articles', 'contact'])
  return (
    <nav className='flex justify-between px-16 text-white z-10 pt-[60px]'>
      <h1>Logo</h1>
      <ul className='flex space-x-12'>
        {menus.map((menu) => (
          <li key={menu}>
            <a className='text-lg font-extrabold tracking-wider capitalize'>
              {menu}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
