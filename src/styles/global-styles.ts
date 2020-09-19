import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'
import { ThemeProps } from './theme.type'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }: ThemeProps) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      &:focus {
        outline: none !important;
      }
    }

    body {
      background-color: ${theme.colors.light100};
      color: ${theme.colors.dark100};
      font-family: ${theme.fontFamily.primary};
    }

    button,
    input,
    select,
    textarea {
      background-color: ${theme.colors.light100};
      color: ${theme.colors.dark100};
      font-family: ${theme.fontFamily.primary};
    }

    img,
    svg {
      width: 100%;
    }

    svg {
      display: block;
    }

    a {
      text-decoration: none;
    }
  `}
`
