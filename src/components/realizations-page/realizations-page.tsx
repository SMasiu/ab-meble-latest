import React from 'react'
import { RealizationsPageWrapper } from './realizations-page.style'
import { ProductItem, Product } from 'components/product-item/product-item'
import { OtherCategories } from 'components/other-categories-section/others-categories-section'
import { AboutRealization, Realization } from 'components/about-realization/about-realization'

export interface RealizationProps {
  product: Product
  aboutRealization: Realization
}

export interface RealizationsPageProps {
  realization: RealizationProps
}

export const RealizationsPage: React.FC<RealizationsPageProps> = ({
  realization: { product, aboutRealization }
}) => (
  <RealizationsPageWrapper>
    <ProductItem product={product} />
    <AboutRealization realization={aboutRealization} />
    <OtherCategories />
  </RealizationsPageWrapper>
)
