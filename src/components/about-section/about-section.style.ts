import styled from 'styled-components'
import { getPageWidth, getHeadingUnderline, getHeadingCenterUnderline } from 'styles/css.helpers'

export const AboutSectionWrapper = styled.section`
  ${getPageWidth}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image article';
  gap: 50px;
  height: 80vh;
  min-height: 700px;

  @media (max-width: 1350px) {
    padding: 0 50px;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'article' 'image';
    height: auto;
    min-height: 0;
    margin-bottom: 50px;
    justify-items: center;
  }

  @media (max-width: 650px) {
    width: 90%;
    padding: 0;
  }
`

export const AboutImageSection = styled.section`
  align-self: center;
  grid-area: image;
`

export const ImageWrapper = styled.figure`
  max-width: 600px;

  @media (max-width: 950px) {
    max-width: 400px;
  }
`

export const ArticleImage = styled.img``

export const AboutArtice = styled.article`
  grid-area: article;
  margin-top: 25%;

  @media (max-width: 1350px) {
    margin-top: 40%;
  }

  @media (max-width: 950px) {
    margin-top: 0;
  }
`

export const AboutHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  ${getHeadingUnderline}

  @media (max-width: 950px) {
    text-align: center;
    ${getHeadingCenterUnderline}
  }
`

export const AboutContentWrapper = styled.section`
  margin-top: 40px;
`

export const AboutContent = styled.p`
  padding: 5px 0;
  max-width: 600px;
`
