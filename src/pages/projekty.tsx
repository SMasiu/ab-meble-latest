import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
import { ProjectsPage } from 'components/projects-page/projects-page'

const Page: React.FC = () => {
  return (
    <Layout>
      <SEO title="Projekty" />
      <ProjectsPage />
    </Layout>
  )
}

export default Page
