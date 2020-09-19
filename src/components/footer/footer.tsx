import React from 'react'
import {
  FooterWrapper,
  FooterInnerWrapper,
  FooterCopyRight,
  FooterColumns,
  FooterColumn,
  FooterColumnHeader,
  ColumnItem,
  FooterColumnAddressHeader,
  ColumnItemLink
} from './footer.style'
import { HeadingH4 } from 'components/headings/headings'
import { Contact } from 'components/contact/contact'
import { productsSectionInput } from 'inputs/products-section.input'

export const Footer: React.FC = () => (
  <FooterWrapper id="kontakt">
    <FooterInnerWrapper>
      <FooterColumns>
        <FooterColumn>
          <FooterColumnHeader>
            <HeadingH4>Kontakt</HeadingH4>
          </FooterColumnHeader>
          <ColumnItem>Email: email@example.com</ColumnItem>
          <ColumnItem>Tel.: 504 654 123</ColumnItem>
          <FooterColumnAddressHeader>
            <HeadingH4>Adres</HeadingH4>
          </FooterColumnAddressHeader>
          <ColumnItem>Olszynki 2-20,</ColumnItem>
          <ColumnItem>44-100 Gliwice</ColumnItem>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnHeader>
            <HeadingH4>O firmie</HeadingH4>
          </FooterColumnHeader>
          <ColumnItem>Czym się zajmujemy</ColumnItem>
          <ColumnItem>Projekty</ColumnItem>
          <ColumnItem>Realizacje</ColumnItem>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnHeader>
            <HeadingH4>Produkty i kategorie</HeadingH4>
          </FooterColumnHeader>
          {[...productsSectionInput.cards, ...productsSectionInput.items].map((item, i) => (
            <ColumnItem key={i}>
              <ColumnItemLink to={item.link}>{item.header}</ColumnItemLink>
            </ColumnItem>
          ))}
        </FooterColumn>
        <FooterColumn>
          <FooterColumnHeader>
            <HeadingH4>Napisz do nas</HeadingH4>
          </FooterColumnHeader>
          <Contact />
        </FooterColumn>
      </FooterColumns>
      <FooterCopyRight>&copy; AB Meble</FooterCopyRight>
    </FooterInnerWrapper>
  </FooterWrapper>
)
