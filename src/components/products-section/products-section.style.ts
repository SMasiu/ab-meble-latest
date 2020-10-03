import styled from 'styled-components'
import { HeadingH3, HeadingH5 } from 'components/headings/headings'
import { getHeadingCenterUnderline, getPageWidth, getImgHoverBg } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

export const ProductsSectionWrapper = styled.section`
  position: relative;
  ${getPageWidth};

  @media (max-width: 1350px) {
    width: 90%;
  }
`

export const ProductLinkAnchor = styled.div`
  position: absolute;
  left: 0;
  top: -115px;
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

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

export const ProductItem = styled.section``

export const ProductImageWrapper = styled.section`
  padding: 25px;
  background: linear-gradient(135deg, rgba(252, 252, 252, 1) 0%, rgba(247, 247, 247, 1) 100%);
  ${getImgHoverBg}
`

export const ProductImage: any = styled(Img)``

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

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const ProductCard = styled.section``

export type CardImageWrapperProps = {
  url: string
} & ThemeProps

export const CardImage = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
  position: relative;
  ${getImgHoverBg}
`
