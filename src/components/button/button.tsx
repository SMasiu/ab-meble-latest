import React from 'react'
import { ButtonWrapper, ButtonText, ButtonArrow } from './button.style'
import { SvgArrowRight } from 'components/arrow-right/arrow-right'

export interface ButtonProps {
  color1?: string
  color2?: string
}

export const Button: React.FC<ButtonProps> = ({ children, color1, color2 }) => (
  <ButtonWrapper color1={color1 || 'dark100'} color2={color2 || 'light100'}>
    <ButtonText>{children}</ButtonText>
    <ButtonArrow>
      <SvgArrowRight />
    </ButtonArrow>
  </ButtonWrapper>
)
