import styled, { css } from 'styled-components'
import { getBorder, getBgColor, getFill } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

export type ArrowButtonWrapperProps = {
  direction: string
} & ThemeProps

export const ArrowButtonWrapper = styled.div<ArrowButtonWrapperProps>`
  border: none;
  background-color: transparent;
  width: 44px;
  height: 44px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;
    ${({ direction }: ArrowButtonWrapperProps) =>
    direction === 'left' &&
      css`
        transform: scale(-1);
      `}

  ${getBorder('dark100', '2px')}
  ${getFill('dark100')}

  &:hover {
    ${getBgColor('dark100')}
    ${getFill('light100')}
  }
`
