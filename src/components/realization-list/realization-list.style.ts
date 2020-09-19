import styled, { css } from 'styled-components'
import { getHeadingCenterUnderline, getPageWidth, getImgHoverBg } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

export const RealizationListWrapper = styled.section`
  padding: 75px 0;
  ${getPageWidth}
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
`

export const RealizationItem = styled.article`
  cursor: pointer;
`

export type RealizationItemImageProps = {
  url: string
} & ThemeProps

export const RealizationItemImage = styled.figure<RealizationItemImageProps>`
  background-size: cover;
  background-position: center;
  height: 250px;
  ${getImgHoverBg}
  ${({ url }: RealizationItemImageProps) => css`
    background-image: url(${url});
  `}
`

export const RealizationItemHeader = styled.header`
  margin-top: 15px;
  text-align: center;
`
