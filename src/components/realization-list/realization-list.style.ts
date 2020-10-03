import styled from 'styled-components'
import { getHeadingCenterUnderline, getPageWidth, getImgHoverBg } from 'styles/css.helpers'
import BackgroundImage from 'gatsby-background-image'

export const RealizationListWrapper = styled.section`
  padding: 75px 0;
  ${getPageWidth}
  @media (max-width: 1350px) {
    width: 90%;
  }
`

export const RealizationListHeader = styled.header`
  text-align: center;
  ${getHeadingCenterUnderline}
`

export const RealizationsList = styled.section`
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const RealizationItem = styled.article`
  cursor: pointer;
`

export const RealizationItemImage: any = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  height: 250px;
  ${getImgHoverBg}
`

export const RealizationItemHeader = styled.header`
  margin-top: 15px;
  text-align: center;
`
