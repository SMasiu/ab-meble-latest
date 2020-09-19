import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
import { RealizationsPage } from 'components/realizations-page/realizations-page'

const Page: React.FC = () => {
  return (
    <Layout>
      <SEO title="Realizacje" />
      <RealizationsPage />
    </Layout>
  )
}

export default Page
