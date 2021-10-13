import { DesktopLogo } from 'components/Layout/Logo'
import { useRouter } from 'next/router'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { SiReverbnation } from 'react-icons/si'

type Props = {
  menus: string[]
}

export const DesktopFooter: React.FC<Props> = (props: Props): JSX.Element => {
  const router = useRouter()
  return (
    <footer className='hidden bg-[#171B20] pt-20 pb-16 md:block'>
      <section className='z-10 flex items-center max-w-6xl mx-auto md:justify-center lg:justify-between md:px-0 '>
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
        <ul className='flex items-center space-x-12 md:hidden lg:flex'>
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
      <p className='text-sm tracking-widest text-center pt-28 md:pt-20 lg:pt-28 text-amber-200'>
        © {new Date().getFullYear()} Alfie Qashwa
      </p>
    </footer>
  )
}
