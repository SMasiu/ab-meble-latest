import styled from 'styled-components'
import { getPageWidth, getBgColor } from 'styles/css.helpers'

export const HeaderWrapper = styled.header`
  ${getBgColor('light200')}
  position: sticky;
  top: 0;
  z-index: 10000;
  padding: 0 25px;
`

export const HeaderInnerWrapper = styled.section`
  ${getPageWidth}
  height: 80px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HamburgerWrapper = styled.section`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`
