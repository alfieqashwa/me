import type { NextPage } from 'next'

import Layout from 'components/Layout'
import Hero, { HeroWithQuote } from 'components/Hero'

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <div className='items-center justify-center md:flex'>
        <Hero title='Cello World!' description='Welcome to my personal blog' />
        <HeroWithQuote quote='✨ Home is not a house ✨' />
      </div>
    </Layout>
  )
}

export default Home
