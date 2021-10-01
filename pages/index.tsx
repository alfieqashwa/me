import type { NextPage } from 'next'

import Layout from 'components/Layout.tsx'
import Hero, { HeroWithQuote } from 'components/Hero'

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <Hero title='Cello World!' description='Welcome to my personal blog' />
      <HeroWithQuote quote='✨ Home is not a house ✨' />
    </Layout>
  )
}

export default Home
