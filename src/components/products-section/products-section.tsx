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
  CardImage
} from './products-section.style'
import { productsSectionInput } from 'inputs/products-section.input'
import { Link } from 'gatsby'

export const ProductsSection = () => (
  <ProductsSectionWrapper>
    <ProductsHeader>
      <ProductsHeading>Katalog produktów</ProductsHeading>
    </ProductsHeader>
    <ProductsCardsWrapper>
      {productsSectionInput.cards.map((card, i) => (
        <Link key={i} to={card.link}>
          <ProductCard>
            <CardImage url={card.imgPath} />
            <ProductHeader>
              <ProductHeading>{card.header}</ProductHeading>
            </ProductHeader>
          </ProductCard>
        </Link>
      ))}
    </ProductsCardsWrapper>
    <ProductsItemsWrapper>
      {productsSectionInput.items.map((item, i) => (
        <Link to={item.link} key={i}>
          <ProductItem>
            <ProductImageWrapper>
              <ProductImage src={item.imgPath} alt="product" />
            </ProductImageWrapper>
            <ProductHeader>
              <ProductHeading>{item.header}</ProductHeading>
            </ProductHeader>
          </ProductItem>
        </Link>
      ))}
    </ProductsItemsWrapper>
  </ProductsSectionWrapper>
)
