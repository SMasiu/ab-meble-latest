import styled from 'styled-components'
import { HeadingH3 } from 'components/headings/headings'
import { getHeadingCenterUnderline } from 'styles/css.helpers'

export const ProjectsSectionWrapper = styled.section``

export const ProjectsHeader = styled.header`
  ${getHeadingCenterUnderline}
`

export const ProjectsHeading = styled(HeadingH3)`
  text-align: center;
`
