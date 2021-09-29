import type { NextPage } from 'next'

import Layout from 'components/Layout.tsx'
import { ExampleComponent } from 'components/ExampleComponent'

const Writings: NextPage = (): JSX.Element => {
  return (
    <Layout title='Writings'>
      <section className='grid min-h-screen place-items-center'>
        <ExampleComponent title='writings' />
        <article>Articles section</article>
      </section>
    </Layout>
  )
}
export default Writings
