import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
import { ProductItem } from 'components/product-item/product-item'
import { OtherCategories } from 'components/other-categories-section/others-categories-section'

const ProductCategoryPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Krzesła i fotele konferencyjne" />
      <ProductItem />
      <OtherCategories />
    </Layout>
  )
}

export default ProductCategoryPage
