import styled, { css } from 'styled-components'
import { ThemeProps } from 'styles/theme.type'
import { getBgColor, getHeadingCenterUnderline, getColor } from 'styles/css.helpers'
import { HeadingH3 } from 'components/headings/headings'

export type UrlProps = {
  url: string
} & ThemeProps

export const ProjectItemWrapper = styled.section`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -25px;
    top: -20px;
    width: 750px;
    height: 400px;
    ${getBgColor('primary100')}
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -75px;
    width: 75%;
    height: 1px;
    transform: translateX(-50%);
    ${getBgColor('light300')};
  }
`

export const ProjectItemContent = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 250px 6fr 4fr;
  gap: 25px;
`

export const ProjectItemMinimap = styled.aside`
  ${getHeadingCenterUnderline}
`

export const MinimapImage = styled.figure<UrlProps>`
  margin: 15px;
  width: 220px;
  height: 120px;
  background-size: cover;
  background-position: center;
  cursor: pointer;

  ${({ url }: UrlProps) => css`
    background-image: url(${url});
  `}
`

export const ProjectItemImage = styled.figure<UrlProps>`
  width: 100%;
  height: 450px;
  background-size: cover;
  background-position: center;
  ${({ url }: UrlProps) => css`
    background-image: url(${url});
  `}
`

export const ProjectItemArticle = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`

export const ArticleHeader = styled.header``

export const ItemHeader = styled.header`
  position: relative;
  margin-left: 275px;
  margin-bottom: 15px;
`

export const ArticleHeading = styled(HeadingH3)`
  ${getColor('dark100')}
`

export const ArticleContent = styled.p`
  margin: 10px 0;
`
