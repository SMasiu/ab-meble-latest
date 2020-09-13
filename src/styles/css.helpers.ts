import { ThemeProps } from './theme.type'
import { css } from 'styled-components'

export const getPageWidth = ({ theme }: ThemeProps) => css`
  max-width: ${theme.page.width};
  margin: auto;
`

export const getColor = (color: string) => ({ theme }: ThemeProps) => css`
  color: ${((theme.colors as unknown) as { [key: string]: string })[color]};
`
