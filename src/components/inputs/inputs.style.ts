import { ThemeProps } from 'styles/theme.type'
import styled, { css } from 'styled-components'
import { getColor, getFontSize } from 'styles/css.helpers'

export const sharedInput = ({ theme }: ThemeProps) => css`
  width: 100%;
  padding: 25px 10px 10px 10px;
  border: none;
  margin-bottom: 25px;
  border-radius: 1px;
  background-color: ${theme.colors.light200};

  &:focus {
    outline: none;
  }
`

export const FieldWrapper = styled.section`
  position: relative;
`

export const StyledLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 5px;
  ${getColor('dark200')}
  ${getFontSize('sm')}
`

export const StyledInput = styled.input`
  ${sharedInput}
`

export const StyledTextarea = styled.textarea`
  ${sharedInput}
  resize: none;
`
