import type { NextPage } from 'next'

import Layout from 'components/Layout'
import { ExampleComponent } from 'components/ExampleComponent'

const Contact: NextPage = (): JSX.Element => {
  return (
    <Layout pageTitle='Contact'>
      <section className='grid min-h-screen place-items-center'>
        <ExampleComponent title='contact' />
        <article>Contact section</article>
      </section>
    </Layout>
  )
}
export default Contact
