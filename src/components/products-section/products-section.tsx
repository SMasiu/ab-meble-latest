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
  ProductsCardsWrapper,
  ProductCard,
  ProductLinkAnchor
} from './products-section.style'
import { productsSectionInput } from 'inputs/products-section.input'
import { Link } from 'gatsby'
import { ProductSectionDynamicImageLg } from './dunamic-image-lg'
import { ProductSectionDynamicImageSm } from './dynamic-image-sm'

export const ProductsSection = () => (
  <ProductsSectionWrapper>
    <ProductLinkAnchor id="produkty" />
    <ProductsHeader>
      <ProductsHeading>Katalog produktów</ProductsHeading>
    </ProductsHeader>
    <ProductsCardsWrapper>
      {productsSectionInput.cards.map((card, i) => (
        <Link key={i} to={card.link}>
          <ProductCard>
            <ProductSectionDynamicImageLg fileName={card.imgPath} alt="Produkt" />
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
              <ProductSectionDynamicImageSm fileName={item.imgPath} alt="produkt" />
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
