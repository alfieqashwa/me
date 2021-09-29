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
      <footer className='w-full h-full bg-[#171B20] md:hidden'>
        <div className='w-11/12 pt-16 mx-auto border-t border-gray-600' />
        <ul className='pt-4 pb-16 space-y-12'>
          {props.menus.map((menu) => (
            <li className='text-center capitalize' key={menu}>
              <h5 className='font-light tracking-wider text-amber-50'>
                <a
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => {
                    e.preventDefault()
                    router.push(`/${menu}`)
                  }}
                >
                  {menu}
                </a>
                {router.asPath === `/${menu}` && (
                  <div className='w-5 mx-auto mt-0.5 border-t' />
                )}
              </h5>
            </li>
          ))}
        </ul>
        <section className='flex items-center justify-center space-x-14'>
          <a
            href='https://www.twitter.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineTwitter className='w-4 h-4 text-trueGray-500' />
          </a>
          <a
            href='https://www.github.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineGithub className='w-4 h-4 text-trueGray-500' />
          </a>
          <a
            href='https://www.instagram.com/alfieqashwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineInstagram className='w-4 h-4 text-trueGray-500' />
          </a>
          <a
            href='https://www.reverbnation.com/tweleph'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiReverbnation className='w-4 h-4 text-trueGray-500' />
          </a>
        </section>
        <p className='pt-16 pb-20 text-sm tracking-widest text-center text-trueGray-500'>
          © {new Date().getFullYear()} Alfie Qashwa
        </p>
      </footer>

      {/* // * Desktop View */}
      <footer className='hidden bg-[#171B20] pt-20 pb-16 -mx-36 md:block'>
        <section className='z-10 flex items-center justify-between px-36'>
          <nav className='flex items-center justify-between space-x-14'>
            <DesktopLogo />
            <section className='flex items-center justify-between space-x-10'>
              <a
                href='https://www.twitter.com/alfieqashwa'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineTwitter className='w-4 h-4 text-trueGray-500' />
              </a>
              <a
                href='https://www.github.com/alfieqashwa'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineGithub className='w-4 h-4 text-trueGray-500' />
              </a>
              <a
                href='https://www.instagram.com/alfieqashwa'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineInstagram className='w-4 h-4 text-trueGray-500' />
              </a>
              <a
                href='https://www.reverbnation.com/tweleph'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SiReverbnation className='w-4 h-4 text-trueGray-500' />
              </a>
            </section>
          </nav>
          <ul className='flex items-center space-x-12'>
            {props.menus.map((menu) => (
              <li key={menu}>
                <h6 className='tracking-wider text-transparent capitalize transition duration-300 ease-in-out bg-clip-text bg-gradient-to-b via-white from-amber-50 to-amber-50 hover:opacity-80'>
                  <a
                    href={`/${menu}`}
                    onClick={(
                      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => {
                      e.preventDefault()
                      router.push(`/${menu}`)
                    }}
                  >
                    {menu}
                  </a>
                  {router.asPath === `/${menu}` && (
                    <div className='w-5 mx-auto mt-0.5 border-t border-amber-100' />
                  )}
                </h6>
              </li>
            ))}
          </ul>
        </section>
        <p className='pt-24 text-sm tracking-widest text-center text-transparent bg-clip-text bg-gradient-to-b via-white from-amber-100 to-amber-100'>
          © {new Date().getFullYear()} Alfie Qashwa
        </p>
      </footer>
    </>
  )
}

export default Footer
