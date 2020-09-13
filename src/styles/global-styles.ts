import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'
import { ThemeProps } from './theme.type'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }: ThemeProps) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: ${theme.colors.primary100};
      color: ${theme.colors.secondary100};
      font-family: ${theme.fontFamily.primary};
    }
  `}
`