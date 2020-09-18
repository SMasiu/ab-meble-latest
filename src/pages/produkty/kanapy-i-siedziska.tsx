import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
import { ProductItem } from 'components/product-item/product-item'

const ProductCategoryPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Kanapy i siedziska" />
      <ProductItem />
    </Layout>
  )
}

export default ProductCategoryPage
