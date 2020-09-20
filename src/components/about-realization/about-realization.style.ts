import styled from 'styled-components'
import { getPageWidth, getHeadingUnderline, getBgColor } from 'styles/css.helpers'

export const AboutRealizationWrapper = styled.section`
  ${getPageWidth}
  margin: 50px auto 100px auto;

  @media (max-width: 1350px) {
    width: 90%;
  }
`

export const RealizationHeader = styled.header`
  ${getHeadingUnderline}
  margin-bottom: 40px;
`

export const RealizationContentWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const RealizationArticle = styled.article`
  margin-top: 100px;

  @media (max-width: 1024px) {
    margin-top: 25px;
  }
`

export const RealizationContent = styled.p`
  margin: 10px 0;
`

export const ReferenceWrapper = styled.section`
  ${getBgColor('light300')}
  display: flex;
  justify-content: center;
`

export const ReferenceImageWrapper = styled.figure`
  padding: 50px;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 750px;
  }
`

export const ReferenceImg = styled.img``
