import type { NextPage } from 'next'

import Layout from 'components/Layout'
import { ExampleComponent } from 'components/ExampleComponent'

const Projects: NextPage = (): JSX.Element => {
  return (
    <Layout title='Projects'>
      <section className='grid min-h-screen place-items-center'>
        <ExampleComponent title='projects' />
        <article>Projects section</article>
      </section>
    </Layout>
  )
}
export default Projects
