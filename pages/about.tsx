import type { NextPage } from 'next'

import Layout from 'components/Layout'
import { ExampleComponent } from 'components/ExampleComponent'

const About: NextPage = (): JSX.Element => {
  return (
    <Layout title='About'>
      <section className='grid min-h-screen place-items-center'>
        <ExampleComponent title='about' />
        <article>About section</article>
      </section>
    </Layout>
  )
}
export default About
