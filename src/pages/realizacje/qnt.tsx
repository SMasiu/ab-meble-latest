import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
import { RealizationsPage } from 'components/realizations-page/realizations-page'
import { realizationQntInput } from 'inputs/realization.inputs'

const Page: React.FC = () => {
  return (
    <Layout>
      <SEO title="Realizacje" />
      <RealizationsPage realization={realizationQntInput} />
    </Layout>
  )
}

export default Page
