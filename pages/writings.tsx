import { ExampleComponent } from 'components/ExampleComponent'
import Layout from 'components/Layout.tsx'
import React from 'react'

const Writings = () => {
  return (
    <Layout title='Writing'>
      <section className='grid min-h-screen place-items-center'>
        <ExampleComponent title='writings' />
        <article>Articles section</article>
      </section>
    </Layout>
  )
}
export default Writings
