import styled from 'styled-components'
import { HeadingH3, HeadingH5 } from 'components/headings/headings'
import { getHeadingCenterUnderline, getPageWidth } from 'styles/css.helpers'

export const ProductsSectionWrapper = styled.section`
  ${getPageWidth}
`

export const ProductsHeader = styled.header`
  ${getHeadingCenterUnderline}
`

export const ProductsHeading = styled(HeadingH3)`
  text-align: center;
`
export const ProductsItemsWrapper = styled.section`
  margin: 75px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
`

export const ProductItem = styled.section``

export const ProductImageWrapper = styled.section``

export const ProductHeader = styled.header``

export const ProductHeading = styled(HeadingH5)`
  text-align: center;
`
