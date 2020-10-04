import styled from 'styled-components'
import { getBgColor, getHeadingCenterUnderline, getColor } from 'styles/css.helpers'
import { HeadingH3 } from 'components/headings/headings'
import BackgroundImage from 'gatsby-background-image'

export const ProjectItemWrapper = styled.section`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -25px;
    top: -20px;
    width: 750px;
    height: 400px;
    opacity: 0.25;
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

  @media (max-width: 1024px) {
    &::before {
      content: none;
    }
  }
`

export const ProjectItemContent = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 250px 6fr 4fr;
  grid-template-areas: 'minimap image article';
  gap: 25px;

  @media (max-width: 1350px) {
    grid-template-columns: 250px 1fr;
    grid-template-areas: 'minimap image' 'article article';
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'image' 'minimap' 'article';
  }

  @media (max-width: 700px) {
    gap: 0;
  }
`

export const ProjectItemMinimap = styled.aside`
  grid-area: minimap;
  ${getHeadingCenterUnderline}

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const MinimapImage: any = styled(BackgroundImage)`
  margin: 15px;
  width: 220px;
  height: 120px;
  background-size: cover;
  background-position: center;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 700px) {
    height: 400px;
  }

  @media (max-width: 550px) {
    height: 300px;
  }
`

export const ProjectItemImage = styled(BackgroundImage)`
  grid-area: image;
  width: 100%;
  height: 450px;
  background-size: cover;
  background-position: center;

  @media (max-width: 700px) {
    display: none;
  }
`

export const ProjectItemArticle = styled.article`
  grid-area: article;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  @media (max-width: 1350px) {
    margin: 25px auto 0;
    max-width: 600px;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`

export const ArticleHeader = styled.header``

export const ItemHeader = styled.header`
  position: relative;
  margin-left: 275px;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: 0;
  }
`

export const ArticleHeading = styled(HeadingH3)`
  ${getColor('dark100')}
`

export const ArticleContent = styled.p`
  margin: 10px 0;
`
