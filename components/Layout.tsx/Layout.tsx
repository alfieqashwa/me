import { Fragment } from 'react'
import { Header } from './Header'
import { Nav } from './Nav'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title = 'Home', children }) => {
  return (
    <Fragment>
      <Header title={title} />
      <div className='min-h-screen mx-auto max-w-7xl FuturaPT'>
        <Nav />
        <main>{children}</main>
        <footer>
          <section>
            <h2>Footer section</h2>
            <p>Footer&apos;s configuration is on progress...</p>
          </section>
        </footer>
      </div>
    </Fragment>
  )
}

export default Layout
