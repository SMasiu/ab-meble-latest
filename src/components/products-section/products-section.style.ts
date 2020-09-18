import styled from 'styled-components'
import { HeadingH3, HeadingH5 } from 'components/headings/headings'
import { getHeadingCenterUnderline, getPageWidth, getImgHoverBg } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

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
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
`

export const ProductItem = styled.section``

export const ProductImageWrapper = styled.section`
  padding: 25px;
  background: linear-gradient(135deg, rgba(252, 252, 252, 1) 0%, rgba(247, 247, 247, 1) 100%);
  ${getImgHoverBg}
`

export const ProductImage = styled.img``

export const ProductHeader = styled.header`
  margin-top: 15px;
`

export const ProductHeading = styled(HeadingH5)`
  text-align: center;
`

export const ProductsCardsWrapper = styled.section`
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`

export const ProductCard = styled.section``

export type CardImageWrapperProps = {
  url: string
} & ThemeProps

export const CardImage = styled.figure<CardImageWrapperProps>`
  background-image: url(${({ url }: CardImageWrapperProps) => url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
  position: relative;
  ${getImgHoverBg}
`
