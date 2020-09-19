import styled from 'styled-components'
import { getPageWidth, getHeadingUnderline, getBgColor } from 'styles/css.helpers'

export const AboutRealizationWrapper = styled.section`
  ${getPageWidth}
  margin: 50px auto 100px auto;
`

export const RealizationHeader = styled.header`
  ${getHeadingUnderline}
`

export const RealizationContentWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`

export const RealizationArticle = styled.article`
  margin-top: 100px;
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
  max-width: 500px;
`

export const ReferenceImg = styled.img``
