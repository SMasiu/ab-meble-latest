import { ThemeProps } from './theme.type'
import { css } from 'styled-components'

export const getPageWidth = ({ theme }: ThemeProps) => css`
  max-width: ${theme.page.width};
  margin: auto;
`

export const getColor = (color: string) => ({ theme }: ThemeProps) => css`
  color: ${((theme.colors as unknown) as { [key: string]: string })[color]};
`

export const getBgColor = (color: string) => ({ theme }: ThemeProps) => css`
  background-color: ${((theme.colors as unknown) as { [key: string]: string })[color]};
`

export const getFill = (color: string) => ({ theme }: ThemeProps) => css`
  * {
    fill: ${((theme.colors as unknown) as { [key: string]: string })[color]};
  }
`

export const getHeadingUnderline = ({ theme }: ThemeProps) => css`
  position: relative;
  margin: 10px 0 20px;

  &::after {
    content: '';
    width: 75px;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: -10px;
    ${getBgColor('primary300')}
  }
`

export const getHeadingCenterUnderline = ({ theme }: ThemeProps) => css`
  position: relative;
  margin: 10px 0 20px;

  &::after {
    content: '';
    width: 100px;
    height: 4px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    ${getBgColor('primary300')}
  }
`

export const getBorder = (color: string, width: string) => ({ theme }: ThemeProps) => css`
  border: solid ${width} ${((theme.colors as unknown) as { [key: string]: string })[color]};
`

export const getFontSize = (fontSize: string) => ({ theme }: ThemeProps) => css`
  font-size: ${((theme.fontSize as unknown) as { [key: string]: string })[fontSize]};
`

export const getImgHoverBg = ({ theme }: ThemeProps) => css`
  position: relative;
  z-index: 1000;
  transition: box-shadow 0.3s;
  will-change: box-shadow;
  box-shadow: 0 0 0 ${theme.colors.primary100};

  &:hover {
    box-shadow: 10px 10px 0 ${theme.colors.primary100};
  }
`
