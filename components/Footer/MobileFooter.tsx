import { useRouter } from 'next/router'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { SiReverbnation } from 'react-icons/si'

type Props = {
  menus: string[]
}

export function MobileFooter(props: Props): JSX.Element {
  const router = useRouter()

  return (
    <footer className='w-full bg-[#171B20] md:hidden'>
      <div className='w-10/12 pt-16 mx-auto border-t border-amber-100' />
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
  )
}
