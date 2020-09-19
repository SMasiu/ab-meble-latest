import styled, { css } from 'styled-components'
import { getBorder, getBgColor, getColor, getFontSize } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

export type ButtonWrapperProps = {
  color1: string
  color2: string
} & ThemeProps

export const ButtonArrow = styled.span`
  width: 20px;
  * {
    transition: all 0.2s;
  }
`

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${({ theme, color1, color2 }: ButtonWrapperProps) => css`
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
    ${getBorder(color1, '2px')}
    ${getColor(color1)}
    ${getFontSize('sm')}
    
    &:focus {
      outline: none;
    }

    ${ButtonArrow} * {
      fill: ${((theme.colors as unknown) as { [key: string]: string })[color1]};
    }

    &:hover {
      ${getBgColor(color1)}
      ${getColor(color2)}
      * {
        fill: ${((theme.colors as unknown) as { [key: string]: string })[color2]} !important;
      }
    }
  `}
`

export const ButtonText = styled.span`
  margin-right: 15px;
`
