import React from 'react'
import {
  ProductsSectionWrapper,
  ProductsHeading,
  ProductsHeader,
  ProductsItemsWrapper,
  ProductItem,
  ProductImageWrapper,
  ProductHeader,
  ProductHeading,
  ProductImage,
  ProductsCardsWrapper,
  ProductCard,
  CardImageWrapper
} from './products-section.style'
import { productsSectionInput } from 'inputs/products-section.input'

export const ProductsSection = () => (
  <ProductsSectionWrapper>
    <ProductsHeader>
      <ProductsHeading>Katalog produktów</ProductsHeading>
    </ProductsHeader>
    <ProductsCardsWrapper>
      {productsSectionInput.cards.map((card, i) => (
        <ProductCard key={i}>
          <CardImageWrapper url={card.imgPath}></CardImageWrapper>
          <ProductHeader>
            <ProductHeading>{card.header}</ProductHeading>
          </ProductHeader>
        </ProductCard>
      ))}
    </ProductsCardsWrapper>
    <ProductsItemsWrapper>
      {productsSectionInput.items.map((item, i) => (
        <ProductItem key={i}>
          <ProductImageWrapper>
            <ProductImage src={item.imgPath} alt="product" />
          </ProductImageWrapper>
          <ProductHeader>
            <ProductHeading>{item.header}</ProductHeading>
          </ProductHeader>
        </ProductItem>
      ))}
    </ProductsItemsWrapper>
  </ProductsSectionWrapper>
)
