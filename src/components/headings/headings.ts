import styled, { css } from 'styled-components'
import { ThemeProps } from 'styles/theme.type'

export const HeadingH1 = styled.h1`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.fontSize.headingLg};

    @media (max-width: 650px) {
      font-size: 40px;
    }
  `}
`

export const HeadingH2 = styled.h2`
  ${({ theme }: ThemeProps) => css`
    text-transform: uppercase;
    font-size: ${theme.fontSize.headingSm};
    color: ${theme.colors.primary200};
  `}
`

export const HeadingH3 = styled.h3`
  ${({ theme }: ThemeProps) => css`
    text-transform: uppercase;
    font-size: ${theme.fontSize.headingMd};
    color: ${theme.colors.dark100};

    @media (max-width: 650px) {
      font-size: 24px;
    }
  `}
`

export const HeadingH4 = styled.h4`
  ${({ theme }: ThemeProps) => css`
    text-transform: uppercase;
    font-size: ${theme.fontSize.headingSm};
    color: ${theme.colors.dark300};
  `}
`

export const HeadingH5 = styled.h5`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.fontSize.headingSm};
    color: ${theme.colors.dark100};
  `}
`
