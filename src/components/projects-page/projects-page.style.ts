import styled from 'styled-components'
import { getPageWidth, getHeadingCenterUnderline } from 'styles/css.helpers'

export const ProjectsPageWrapper = styled.section`
  padding: 75px 0;
  ${getPageWidth};
`

export const ProjectPageHeader = styled.header`
  ${getHeadingCenterUnderline}
  text-align: center;
  margin-bottom: 125px;
`

export const ProjectsList = styled.section`
  > *:not(:last-child) {
    margin-bottom: 150px;
  }
`
