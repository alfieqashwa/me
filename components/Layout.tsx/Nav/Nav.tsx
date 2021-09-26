import { ActiveLink } from './ActiveLink'
import { Logo } from './Logo'

type Props = {
  menus: string[]
}

const Nav: React.FC<Props> = (props: Props): JSX.Element => {
  return (
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
  )
}
export default Nav
