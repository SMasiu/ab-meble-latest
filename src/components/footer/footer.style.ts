import styled from 'styled-components'
import { getBgColor, getColor, getFontSize, getPageWidth } from 'styles/css.helpers'
import { Link } from 'gatsby'

export const FooterWrapper = styled.footer`
  padding: 50px 0;
  ${getBgColor('dark100')}
  ${getColor('light100')}

  @media (max-width: 1350px) {
    padding: 50px;
  }

  @media (max-width: 1350px) {
    padding: 50px 0;
  }
`

export const FooterInnerWrapper = styled.section`
  ${getPageWidth}

  @media (max-width: 1350px) {
    width: 90%;
  }
`

export const FooterColumns = styled.section`
  display: grid;
  row-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'contact about-company categories contact-form';

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'contact contact-form' 'about-company categories';
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'contact-form' 'contact' 'about-company' 'categories';
  }
`

export const FooterColumn = styled.section``

export const ContactColumn = styled(FooterColumn)`
  grid-area: contact;
`
export const AboutCompanyColumn = styled(FooterColumn)`
  grid-area: about-company;
`
export const CategoriesColumn = styled(FooterColumn)`
  grid-area: categories;
`
export const FormColumn = styled(FooterColumn)`
  grid-area: contact-form;
`

export const FooterColumnHeader = styled.header`
  margin: 10px 0;
`

export const FooterColumnAddressHeader = styled(FooterColumnHeader)`
  margin: 30px 0 10px;
`

export const ColumnItem = styled.p`
  padding: 5px 0;
  ${getFontSize('sm')}
`

export const ColumnItemLink = styled(Link)`
  ${getColor('light100')}
`

export const FooterCopyRight = styled.p`
  margin-top: 50px;
  text-align: center;
  ${getFontSize('sm')}
`
