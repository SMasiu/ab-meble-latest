import styled from 'styled-components'
import { getPageWidth, getHeadingUnderline, getHeadingCenterUnderline } from 'styles/css.helpers'
import Img from 'gatsby-image'

export const AboutSectionWrapper = styled.section`
  ${getPageWidth}
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image article';
  gap: 50px;
  height: auto;
  min-height: 700px;
  margin: 150px auto 100px;

  @media (max-width: 1350px) {
    padding: 0 50px;
  }

  @media (max-width: 1000px) {
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
    width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 400px;
    width: 300px;
  }
`

export const ArticleImage: any = styled(Img)``

export const AboutArtice = styled.article`
  grid-area: article;
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

export const LinkAnchor = styled.span`
  position: absolute;
  left: 0;
  top: -100px;
`
