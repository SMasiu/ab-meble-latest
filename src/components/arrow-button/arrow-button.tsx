import React from 'react'
import { ArrowButtonWrapper } from './arrow-button.style'
import { SvgArrowRight } from 'components/arrow-right/arrow-right'

export interface ArrowButtonProps {
  direction?: string
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => (
  <ArrowButtonWrapper direction={direction || 'right'}>
    <SvgArrowRight />
  </ArrowButtonWrapper>
)
