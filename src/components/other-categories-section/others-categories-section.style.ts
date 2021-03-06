import styled, { css } from 'styled-components'
import {
  getBgColor,
  getPageWidth,
  getHeadingCenterUnderline,
  getImgHoverBg
} from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

export const OtherCategoriesWrapper = styled.section`
  padding: 50px 0;
  ${getBgColor('light300')};
`

export const CategoriesInnerWrapper = styled.section`
  ${getPageWidth}

  @media (max-width: 1350px) {
    width: 100%;
    padding: 0 50px;
  }
`

export const CategoriesHeader = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  ${getHeadingCenterUnderline}
`

export const CategoryItemsWrapper = styled.section`
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`

export const CategoryItemWrapper = styled.section``

export type CategoryItemProps = {
  path: string
} & ThemeProps

export const CategoryItem = styled.figure<CategoryItemProps>`
  cursor: pointer;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  ${getImgHoverBg}

  ${({ path }: CategoryItemProps) => css`
    background-image: url(${path});
  `}

  @media (max-width: 1350px) {
    height: 200px;
  }

  @media (max-width: 850px) {
    height: 350px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }
`

export const CategoryItemHeader = styled.header`
  text-align: center;
  margin-top: 15px;
`
