import { ActiveLink } from './ActiveLink'
import { DesktopLogo } from 'components/Layout/Logo'

type Props = {
  menus: string[]
}

const DesktopNavigation: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <nav className='z-10 flex items-center justify-between pt-14'>
      <DesktopLogo />
      <ul className='flex items-center space-x-12'>
        {props.menus.map((menu) => (
          <li key={menu}>
            <h6 className='tracking-wider capitalize transition duration-300 ease-in-out text-amber-50 hover:opacity-80'>
              <ActiveLink href={`/${menu}`}>{menu}</ActiveLink>
            </h6>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default DesktopNavigation
