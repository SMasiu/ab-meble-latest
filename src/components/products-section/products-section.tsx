import React from 'react'
import {
  ProductsSectionWrapper,
  ProductsHeading,
  ProductsHeader,
  ProductsItemsWrapper,
  ProductItem,
  ProductImageWrapper,
  ProductHeader,
  ProductHeading
} from './products-section.style'
import { productsSectionInput } from 'inputs/products-section.input'

export const ProductsSection = () => (
  <ProductsSectionWrapper>
    <ProductsHeader>
      <ProductsHeading>Katalog produktów</ProductsHeading>
    </ProductsHeader>
    <ProductsItemsWrapper>
      {productsSectionInput.items.map((item, i) => (
        <ProductItem key={i}>
          <ProductImageWrapper>
            <img src={item.imgPath} alt="product" />
          </ProductImageWrapper>
          <ProductHeader>
            <ProductHeading>{item.header}</ProductHeading>
          </ProductHeader>
        </ProductItem>
      ))}
    </ProductsItemsWrapper>
  </ProductsSectionWrapper>
)
