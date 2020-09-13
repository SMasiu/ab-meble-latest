import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      Hello
    </Layout>
  )
}

export default IndexPage
