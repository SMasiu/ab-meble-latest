import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
import { ProductItem } from 'components/product-item/product-item'
import { OtherCategories } from 'components/other-categories-section/others-categories-section'
import { productReceptionDesksInput } from 'inputs/product-page.input'

const ProductCategoryPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Lady recepcyjne" />
      <ProductItem product={productReceptionDesksInput} />
      <OtherCategories />
    </Layout>
  )
}

export default ProductCategoryPage
