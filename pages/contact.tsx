import type { NextPage } from 'next'

import Layout from 'components/Layout.tsx'
import { ExampleComponent } from 'components/ExampleComponent'

const Contact: NextPage = (): JSX.Element => {
  return (
    <Layout title='Writing'>
      <section className='grid min-h-screen place-items-center'>
        <ExampleComponent title='contact' />
        <article>Contact section</article>
      </section>
    </Layout>
  )
}
export default Contact
