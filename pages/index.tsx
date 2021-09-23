import type { NextPage } from 'next'

import Layout from 'components/Layout.tsx'
import { ExampleComponent } from 'components/ExampleComponent'

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <section className='grid min-h-screen place-items-center'>
        <ExampleComponent title='Cello World' />
      </section>
    </Layout>
  )
}

export default Home
