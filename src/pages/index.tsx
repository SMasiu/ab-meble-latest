import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
// import { HeroSection } from 'components/hero-section/hero-section'
// import { AboutSection } from 'components/about-section/about-section'
// import { ProductsSection } from 'components/products-section/products-section'
import { ProjectsSecton } from 'components/projects-section/projects-section'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <HeroSection />
      <AboutSection />
      <ProductsSection /> */}
      <ProjectsSecton />
    </Layout>
  )
}

export default IndexPage
