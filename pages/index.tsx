import type { NextPage } from 'next'

import Layout from 'components/Layout.tsx'
import { ExampleComponent } from 'components/ExampleComponent'
import Hero from 'components/Hero'

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default Home
