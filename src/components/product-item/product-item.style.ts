import styled from 'styled-components'
import { getPageWidth, getHeadingUnderline } from 'styles/css.helpers'
import { ButtonBack, ButtonNext } from 'pure-react-carousel'

export const ProductItemWrapper = styled.section`
  padding: 100px 0;
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
  height: 200px;
`

export const MinimapImgWrapper = styled.figure`
  width: 100%;
`

export const CounterText = styled.p``
