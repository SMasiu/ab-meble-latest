import styled from 'styled-components'
import { getPageWidth } from 'styles/css.helpers'

export const AboutSectionWrapper = styled.section`
  ${getPageWidth}
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80vh;
  min-height: 700px;
  align-items: center;
`

export const AboutImageSection = styled.section``

export const ImageWrapper = styled.figure`
  width: 500px;
`

export const ArticleImage = styled.img``

export const AboutArtice = styled.article``
