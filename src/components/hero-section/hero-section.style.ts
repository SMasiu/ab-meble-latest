import styled from 'styled-components'
import { getPageWidth, getBgColor, getHeadingUnderline } from 'styles/css.helpers'

export const HeroSectionWrapper = styled.section`
  height: calc(100vh - 80px);
  min-height: 800px;
  ${getBgColor('light200')}
`

export const HeroSectionInnerWrapper = styled.section`
  ${getPageWidth}
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeroArticle = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeroHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  ${getHeadingUnderline}
`

export const HeaderWord = styled.span`
  display: block;
  line-height: 150%;
`

export const ArticleContent = styled.p`
  margin-top: 20px;
  max-width: 500px;
`

export const HeroImageSection = styled.section``
