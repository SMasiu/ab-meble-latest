import styled from 'styled-components'
import { getPageWidth, getHeadingCenterUnderline } from 'styles/css.helpers'

export const ProjectsPageWrapper = styled.section`
  padding: 75px 0;
  ${getPageWidth};

  @media (max-width: 1350px) {
    width: 90%;
  }
`

export const ProjectPageHeader = styled.header`
  ${getHeadingCenterUnderline}
  text-align: center;
  margin-bottom: 125px;

  @media (max-width: 1024px) {
    margin-bottom: 75px;
  }
`

export const ProjectsList = styled.section`
  > *:not(:last-child) {
    margin-bottom: 150px;
  }
`
