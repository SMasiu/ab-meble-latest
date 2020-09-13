import styled, { css } from 'styled-components'
import { getBorder, getBgColor, getColor } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

export const ButtonWrapper = styled.button`
  max-width: 200px;
  display: inline;
  border: none;
  padding: 10px 25px;
  border-radius: 0px;
  background-color: transparent;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: background-color, color;
  will-change: background-color, color;
  display: flex;
  align-items: center;
  justify-content: center;
  ${getBorder('dark100', '2px')}

  &:focus {
    outline: none;
  }

  &:hover {
    ${getBgColor('dark100')}
    ${getColor('light100')}

    ${({ theme }: ThemeProps) => css`
      * {
        fill: ${theme.colors.light100} !important;
      }
    `}
  }

`

export const ButtonText = styled.span`
  margin-right: 15px;
`

export const ButtonArrow = styled.span`
  width: 20px;

  ${({ theme }: ThemeProps) => css`
    * {
      transition: all 0.2s;
      fill: ${theme.colors.dark100};
    }
  `}
`
