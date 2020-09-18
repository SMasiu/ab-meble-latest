import React from 'react'
import {
  OtherCategoriesWrapper,
  CategoriesInnerWrapper,
  CategoriesHeader,
  CategoryItemsWrapper,
  CategoryItem,
  CategoryItemHeader
} from './others-categories-section.style'
import { HeadingH3, HeadingH4, HeadingH5 } from 'components/headings/headings'

export const OtherCategories = () => {
  const items = [
    {
      path: '/products/product5.jpg',
      header: 'Salony'
    },
    {
      path: '/products/product6.jpg',
      header: 'Akustyka'
    },
    {
      path: '/products/product7.jpg',
      header: 'Muzyka'
    }
  ]

  return (
    <OtherCategoriesWrapper>
      <CategoriesInnerWrapper>
        <CategoriesHeader>
          <HeadingH3>Inne kategorie</HeadingH3>
          <HeadingH4>Zobacz również</HeadingH4>
        </CategoriesHeader>
        <CategoryItemsWrapper>
          {items.map((item, i) => (
            <CategoryItemHeader key={i}>
              <CategoryItem path={item.path} />
              <CategoryItemHeader>
                <HeadingH5>{item.header}</HeadingH5>
              </CategoryItemHeader>
            </CategoryItemHeader>
          ))}
        </CategoryItemsWrapper>
      </CategoriesInnerWrapper>
    </OtherCategoriesWrapper>
  )
}
