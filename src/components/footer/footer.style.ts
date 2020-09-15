import styled from 'styled-components'
import { getBgColor, getColor, getFontSize, getPageWidth } from 'styles/css.helpers'

export const FooterWrapper = styled.footer`
  padding: 50px 0;
  ${getBgColor('dark100')}
  ${getColor('light100')}
`

export const FooterInnerWrapper = styled.section`
  ${getPageWidth}
`

export const FooterColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const FooterColumn = styled.section``

export const FooterColumnHeader = styled.header`
  margin: 10px 0;
`

export const FooterColumnAddressHeader = styled(FooterColumnHeader)`
  margin: 30px 0 10px;
`

export const ColumnItem = styled.p`
  padding: 5px 0;
  ${getFontSize('sm')}
`

export const FooterCopyRight = styled.p`
  margin-top: 50px;
  text-align: center;
  ${getFontSize('sm')}
`
