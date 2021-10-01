import { useRouter } from 'next/router'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { SiReverbnation } from 'react-icons/si'

import { DesktopLogo } from 'components/Layout.tsx/Nav/Logo'

type Props = {
  menus: string[]
}

function Footer(props: Props): JSX.Element {
  const router = useRouter()

  return (
    <>
      {/* // * Mobile View */}
      <footer className='w-full bg-[#171B20] md:hidden'>
        <div className='w-10/12 pt-16 mx-auto border-t border-amber-100' />
        <ul className='pt-4 pb-16 space-y-12'>
          {props.menus.map((menu) => (
            <li className='text-center capitalize' key={menu}>
              <h5 className='font-light tracking-wider text-amber-100'>
                <a
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => {
                    e.preventDefault()
                    router.push(`/${menu}`)
                  }}
                  className={`${
                    router.asPath === `/${menu}`
                      ? 'text-amber-300'
                      : 'text-amber-100'
                  }`}
                >
                  {menu}
                </a>
              </h5>
            </li>
          ))}
        </ul>
        <section className='flex items-center justify-center space-x-14'>
          <a
            className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
            href='https://www.twitter.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineTwitter className='w-4 h-4 text-amber-300' />
          </a>
          <a
            className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
            href='https://www.github.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineGithub className='w-4 h-4 text-amber-300' />
          </a>
          <a
            className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
            href='https://www.instagram.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineInstagram className='w-4 h-4 text-amber-300' />
          </a>
          <a
            className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
            href='https://www.reverbnation.com/tweleph'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiReverbnation className='w-4 h-4 text-amber-300' />
          </a>
        </section>
        <p className='pt-16 pb-20 text-sm tracking-widest text-center text-amber-200'>
          © {new Date().getFullYear()} Alfie Qashwa
        </p>
      </footer>

      {/* // * Desktop View */}
      <footer className='hidden bg-[#171B20] -mx-36 pt-20 pb-16 md:block'>
        <section className='z-10 flex items-center justify-between px-36'>
          <nav className='flex items-center justify-between space-x-14'>
            <DesktopLogo />
            <section className='flex items-center justify-between space-x-10'>
              <a
                className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
                href='https://www.twitter.com/alfieqashwa'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineTwitter className='w-4 h-4 text-amber-200' />
              </a>
              <a
                className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
                href='https://www.github.com/alfieqashwa'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineGithub className='w-4 h-4 text-amber-200' />
              </a>
              <a
                className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
                href='https://www.instagram.com/alfieqashwa'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineInstagram className='w-4 h-4 text-amber-200' />
              </a>
              <a
                className='p-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
                href='https://www.reverbnation.com/tweleph'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SiReverbnation className='w-4 h-4 text-amber-200' />
              </a>
            </section>
          </nav>
          <ul className='flex items-center space-x-12'>
            {props.menus.map((menu) => (
              <li key={menu}>
                <h6 className='tracking-wider capitalize transition duration-300 ease-in-out text-amber-50 hover:opacity-80'>
                  <a
                    href={`/${menu}`}
                    onClick={(
                      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => {
                      e.preventDefault()
                      router.push(`/${menu}`)
                    }}
                    className='px-1.5 py-0.5 rounded focus:outline-none focus:ring-2 ring-amber-50'
                  >
                    {menu}
                  </a>
                  {router.asPath === `/${menu}` && (
                    <div className='w-6 mx-auto mt-0.5 border-t border-amber-100' />
                  )}
                </h6>
              </li>
            ))}
          </ul>
        </section>
        <p className='text-sm tracking-widest text-center pt-28 text-amber-200'>
          © {new Date().getFullYear()} Alfie Qashwa
        </p>
      </footer>
    </>
  )
}

export default Footer
