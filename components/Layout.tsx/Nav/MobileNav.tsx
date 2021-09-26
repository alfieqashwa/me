import { MenuAlt4Icon } from '@heroicons/react/outline'
import { Logo } from './Logo'

type Props = {
  isToggled: boolean
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
}
export const MobileNav: React.FC<Props> = (props) => {
  const toggled = () => {
    props.setIsToggled((prev) => !prev)
  }
  return (
    <div className='md:hidden'>
      <main className='flex items-center px-16 z-10 justify-between pt-[60px]'>
        <Logo />
        <button onClick={toggled}>
          <MenuAlt4Icon className='w-6 h-6' />
        </button>
      </main>
    </div>
  )
}
