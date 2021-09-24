import Link from 'next/link'
const LOGO = 'LOGO'

export const Logo: React.FC = (): JSX.Element => {
  return (
    <h4 className='transition duration-300 ease-in-out hover:opacity-80'>
      <Link href='/' passHref>
        {LOGO}
      </Link>
    </h4>
  )
}
