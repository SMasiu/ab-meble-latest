import React from 'react'
import {
  FooterWrapper,
  FooterInnerWrapper,
  FooterCopyRight,
  FooterColumns,
  FooterColumn,
  FooterColumnHeader,
  ColumnItem
} from './footer.style'
import { HeadingH4 } from 'components/headings/headings'

export const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterInnerWrapper>
      <FooterColumns>
        <FooterColumn>
          <FooterColumnHeader>
            <HeadingH4>Kontakt</HeadingH4>
          </FooterColumnHeader>
          <ColumnItem>Email: email@example.com</ColumnItem>
          <ColumnItem>Tel.: 504 654 123</ColumnItem>
          <FooterColumnHeader>
            <HeadingH4>Adres</HeadingH4>
            <ColumnItem>Olszynki 2-20,</ColumnItem>
            <ColumnItem>44-100 Gliwice</ColumnItem>
          </FooterColumnHeader>
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
          <ColumnItem>Fotele i krzesła obrotowe</ColumnItem>
          <ColumnItem>Kanapy i siedziska</ColumnItem>
          <ColumnItem>Krzesła do jadalni</ColumnItem>
          <ColumnItem>Krzesła i fotele konferencyjne</ColumnItem>
          <ColumnItem>Meble gabinetowe</ColumnItem>
          <ColumnItem>Meble pracownicze</ColumnItem>
        </FooterColumn>
      </FooterColumns>
      <FooterCopyRight>&copy; AB Meble</FooterCopyRight>
    </FooterInnerWrapper>
  </FooterWrapper>
)
