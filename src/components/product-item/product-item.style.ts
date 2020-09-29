import styled from 'styled-components'
import { getPageWidth, getHeadingUnderline } from 'styles/css.helpers'
import { ButtonBack, ButtonNext, CarouselProvider } from 'pure-react-carousel'
import { ThemeProps } from 'styles/theme.type'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

export const ProductItemWrapper = styled.section`
  padding: 50px 0 75px;
  ${getPageWidth}

  @media (max-width: 1350px) {
    max-width: 1000px;
  }

  @media (max-width: 1100px) {
    width: 90%;
    padding: 50px 0 0 0;
  }
`

export const SliderItem = styled.section`
  ${getPageWidth}
  height: 475px;
  display: flex;
  justify-content: center;

  @media (max-width: 1350px) {
    width: 1000px;
    height: 400px;
  }
`

export const ImgWrapper = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const ButtonBackStyled = styled(ButtonBack)`
  border: none;
`

export const ButtonNextStyled = styled(ButtonNext)`
  border: none;
`

export const SliderButtons = styled.section`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`

export const ProductHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  ${getHeadingUnderline}
`

export const SliderWrapper = styled.section`
  margin-top: 50px;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const MinimapWrapper = styled.section`
  margin-top: 50px;
`

export const MinimapItemWrapper = styled.section`
  width: 200px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export type MinimapImgWrapperProps = {
  url: string
} & ThemeProps

export const MinimapImgWrapper = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const CounterText = styled.p``

export const MinimapPrevBtn = styled(ButtonBack)`
  border: none;
  justify-self: flex-start;
`

export const MinimapNextBtn = styled(ButtonNext)`
  border: none;
  justify-self: flex-end;
`

export const CarouselMinimapProvider = styled(CarouselProvider)`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  align-items: center;
`

export const GalleryWrapper = styled.section`
  display: none;

  @media (max-width: 1100px) {
    display: block;
  }
`

export const GalleryItem = styled.figure`
  width: 100%;
  margin: 25px 0;
`

export const GalleryImg: any = styled(Img)``
