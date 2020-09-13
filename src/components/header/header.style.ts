import styled from 'styled-components'
import { getPageWidth, getBgColor } from 'styles/css.helpers'

export const HeaderWrapper = styled.header`
  ${getBgColor('light200')}
`

export const HeaderInnerWrapper = styled.section`
  ${getPageWidth}
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
