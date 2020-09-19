import React from 'react'
import {
  OtherCategoriesWrapper,
  CategoriesInnerWrapper,
  CategoriesHeader,
  CategoryItemsWrapper,
  CategoryItem,
  CategoryItemHeader,
  CategoryItemWrapper
} from './others-categories-section.style'
import { HeadingH3, HeadingH4, HeadingH5 } from 'components/headings/headings'
import { PATH_PREFIX } from 'common/path'

export const OtherCategories = () => {
  const items = [
    {
      path: `${PATH_PREFIX}/products/product5.jpg`,
      header: 'Salony'
    },
    {
      path: `${PATH_PREFIX}/products/product6.jpg`,
      header: 'Akustyka'
    },
    {
      path: `${PATH_PREFIX}/products/product7.jpg`,
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
            <CategoryItemWrapper key={i}>
              <CategoryItem path={item.path} />
              <CategoryItemHeader>
                <HeadingH5>{item.header}</HeadingH5>
              </CategoryItemHeader>
            </CategoryItemWrapper>
          ))}
        </CategoryItemsWrapper>
      </CategoriesInnerWrapper>
    </OtherCategoriesWrapper>
  )
}
