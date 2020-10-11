import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
import { ProductItem } from 'components/product-item/product-item'
import { OtherCategories } from 'components/other-categories-section/others-categories-section'
import { productConferenceRoomsInput } from 'inputs/product-page.input'

const ProductCategoryPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Sale konferencyjne" />
      <ProductItem product={productConferenceRoomsInput} />
      <OtherCategories />
    </Layout>
  )
}

export default ProductCategoryPage
