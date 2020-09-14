import styled from 'styled-components'
import { getPageWidth, getHeadingUnderline } from 'styles/css.helpers'

export const AboutSectionWrapper = styled.section`
  ${getPageWidth}
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80vh;
  min-height: 700px;
`

export const AboutImageSection = styled.section`
  align-self: center;
`

export const ImageWrapper = styled.figure`
  width: 600px;
`

export const ArticleImage = styled.img``

export const AboutArtice = styled.article`
  margin-top: 25%;
`

export const AboutHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  ${getHeadingUnderline}
`

export const AboutContentWrapper = styled.section`
  margin-top: 40px;
`

export const AboutContent = styled.p`
  padding: 5px 0;
  max-width: 600px;
`
