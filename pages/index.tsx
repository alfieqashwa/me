import type { NextPage } from 'next'
import Head from 'next/head'

import { ExampleComponent } from 'components/ExampleComponent'
import Layout from 'components/Layout.tsx'
import React from 'react'

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <h1>Hello</h1>
    </Layout>
  )
}

export default Home
