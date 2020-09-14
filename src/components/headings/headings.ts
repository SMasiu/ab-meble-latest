import styled, { css } from 'styled-components'
import { ThemeProps } from 'styles/theme.type'

export const HeadingH1 = styled.h1`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.fontSize.headingLg};
  `}
`

export const HeadingH2 = styled.h2`
  ${({ theme }: ThemeProps) => css`
    text-transform: uppercase;
    font-size: ${theme.fontSize.headingSm};
    color: ${theme.colors.primary100};
  `}
`

export const HeadingH3 = styled.h3`
  ${({ theme }: ThemeProps) => css`
    text-transform: uppercase;
    font-size: ${theme.fontSize.headingMd};
    color: ${theme.colors.dark100};
  `}
`

export const HeadingH4 = styled.h4`
  ${({ theme }: ThemeProps) => css`
    text-transform: uppercase;
    font-size: ${theme.fontSize.headingSm};
    color: ${theme.colors.dark300};
  `}
`
