import React from 'react'
import { FieldWrapper, StyledInput, StyledTextarea, StyledLabel } from './inputs.style'

export const Input = () => (
  <FieldWrapper>
    <StyledLabel>Email</StyledLabel>
    <StyledInput />
  </FieldWrapper>
)

export const Textarea = () => (
  <FieldWrapper>
    <StyledLabel>Wiadomość</StyledLabel>
    <StyledTextarea rows={5} />
  </FieldWrapper>
)
