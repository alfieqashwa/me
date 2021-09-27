import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { SiReverbnation } from 'react-icons/si'

import { MobileActiveLink } from './MobileActiveLink'

type Props = {
  menus: string[]
}

export const MobileNav: React.FC<Props> = (props) => {
  return (
    <div className='z-0 w-full md:hidden'>
      <nav className='w-full bg-[#1D2128]'>
        <section className='py-12'>
          <div className='flex items-center justify-center space-x-14'>
            <AiOutlineTwitter className='w-4 h-4' />
            <AiOutlineGithub className='w-4 h-4' />
            <AiOutlineInstagram className='w-4 h-4' />
            <SiReverbnation className='w-4 h-4' />
          </div>
        </section>
        <div className='w-10/12 mx-auto border-t border-gray-600' />
        <ul className='pt-12 pb-20 space-y-8'>
          {props.menus.map((menu) => (
            <li className='text-center capitalize' key={menu}>
              <h5 className='font-light tracking-wider'>
                <MobileActiveLink href={`/${menu}`}>{menu}</MobileActiveLink>
              </h5>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
