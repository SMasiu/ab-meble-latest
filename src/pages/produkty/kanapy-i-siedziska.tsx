import React from 'react'
import { Layout } from 'components/layout/layout'
import { SEO } from 'components/seo/seo'
import { ProductItem } from 'components/product-item/product-item'
import { OtherCategories } from 'components/other-categories-section/others-categories-section'
import { productSofasAndSeatsInput } from 'inputs/product-page.input'

const ProductCategoryPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Kanapy i siedziska" />
      <ProductItem product={productSofasAndSeatsInput} />
      <OtherCategories />
    </Layout>
  )
}

export default ProductCategoryPage
