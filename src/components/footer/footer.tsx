import React from 'react'
import {
  FooterWrapper,
  FooterInnerWrapper,
  FooterCopyRight,
  FooterColumns,
  FooterColumnHeader,
  ColumnItem,
  FooterColumnAddressHeader,
  ColumnItemLink,
  ContactColumn,
  AboutCompanyColumn,
  CategoriesColumn,
  FormColumn
} from './footer.style'
import { HeadingH4 } from 'components/headings/headings'
import { Contact } from 'components/contact/contact'
import { productsSectionInput } from 'inputs/products-section.input'

export const Footer: React.FC = () => (
  <FooterWrapper id="kontakt">
    <FooterInnerWrapper>
      <FooterColumns>
        <ContactColumn>
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
        </ContactColumn>
        <AboutCompanyColumn>
          <FooterColumnHeader>
            <HeadingH4>O firmie</HeadingH4>
          </FooterColumnHeader>
          <ColumnItem>
            <ColumnItemLink to="/#o-firmie">Czym się zajmujemy</ColumnItemLink>
          </ColumnItem>
          <ColumnItem>
            <ColumnItemLink to="/projekty">Projekty</ColumnItemLink>
          </ColumnItem>
          <ColumnItem>
            <ColumnItemLink to="/realizacje">Realizacje</ColumnItemLink>
          </ColumnItem>
        </AboutCompanyColumn>
        <CategoriesColumn>
          <FooterColumnHeader>
            <HeadingH4>Produkty i kategorie</HeadingH4>
          </FooterColumnHeader>
          {[...productsSectionInput.cards, ...productsSectionInput.items].map((item, i) => (
            <ColumnItem key={i}>
              <ColumnItemLink to={item.link}>{item.header}</ColumnItemLink>
            </ColumnItem>
          ))}
        </CategoriesColumn>
        <FormColumn>
          <FooterColumnHeader>
            <HeadingH4>Napisz do nas</HeadingH4>
          </FooterColumnHeader>
          <Contact />
        </FormColumn>
      </FooterColumns>
      <FooterCopyRight>&copy; AB Meble</FooterCopyRight>
    </FooterInnerWrapper>
  </FooterWrapper>
)
