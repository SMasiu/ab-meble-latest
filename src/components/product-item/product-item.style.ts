import styled, { css } from 'styled-components'
import { getPageWidth, getHeadingUnderline } from 'styles/css.helpers'
import { ButtonBack, ButtonNext, CarouselProvider } from 'pure-react-carousel'
import { ThemeProps } from 'styles/theme.type'

export const ProductItemWrapper = styled.section`
  padding: 50px 0 75px;
  ${getPageWidth}
`

export const SliderItem = styled.section`
  ${getPageWidth}
  height: 350px;
  display: flex;
  justify-content: center;
`

export const ImgWrapper = styled.figure`
  width: 400px;
`

export const Img = styled.img``

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

export const MinimapImgWrapper = styled.figure<MinimapImgWrapperProps>`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${({ url }: MinimapImgWrapperProps) => css`
    background-image: url(${url});
  `};
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
