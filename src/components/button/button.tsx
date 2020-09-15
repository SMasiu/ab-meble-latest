import React from 'react'
import { ButtonWrapper, ButtonText, ButtonArrow } from './button.style'

export interface ButtonProps {
  color1?: string
  color2?: string
}

function SvgArrowRight() {
  return (
    <svg viewBox="0 0 512 512">
      <path d="M511.189 259.954a10.667 10.667 0 00-2.325-11.627l-192-192c-4.237-4.093-10.99-3.975-15.083.262-3.992 4.134-3.992 10.687 0 14.82l173.803 173.803H10.667C4.776 245.213 0 249.989 0 255.88c0 5.891 4.776 10.667 10.667 10.667h464.917L301.803 440.328c-4.237 4.093-4.355 10.845-.262 15.083 4.093 4.237 10.845 4.354 15.083.262.089-.086.176-.173.262-.262l192-192a10.693 10.693 0 002.303-3.457z" />
      <path d="M309.333 458.546a10.667 10.667 0 01-7.552-18.219l184.47-184.447-184.47-184.448c-4.093-4.237-3.975-10.99.262-15.083 4.134-3.992 10.687-3.992 14.82 0l192 192c4.164 4.165 4.164 10.917 0 15.083l-192 192a10.66 10.66 0 01-7.53 3.114z" />
      <path d="M501.333 266.546H10.667C4.776 266.546 0 261.771 0 255.88s4.776-10.667 10.667-10.667h490.667c5.891 0 10.667 4.776 10.667 10.667-.001 5.891-4.777 10.666-10.668 10.666z" />
    </svg>
  )
}

export default SvgArrowRight

export const Button: React.FC<ButtonProps> = ({ children, color1, color2 }) => (
  <ButtonWrapper color1={color1 || 'dark100'} color2={color2 || 'light100'}>
    <ButtonText>{children}</ButtonText>
    <ButtonArrow>
      <SvgArrowRight />
    </ButtonArrow>
  </ButtonWrapper>
)
