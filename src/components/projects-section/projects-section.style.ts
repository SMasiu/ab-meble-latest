import styled from 'styled-components'
import { HeadingH3, HeadingH4 } from 'components/headings/headings'
import {
  getHeadingCenterUnderline,
  getPageWidth,
  getColor,
  getFontSize,
  getBgColor
} from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

export const ProjectsSectionWrapper = styled.section`
  height: 90vh;
  min-height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${getPageWidth}
`

export const ProjectsHeader = styled.header`
  ${getHeadingCenterUnderline}
`

export const ProjectsHeading = styled(HeadingH3)`
  text-align: center;
`

export const ProjectsInnerWrapper = styled.section`
  margin: 75px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`

export const ProjectItemWrapper = styled.article`
  position: relative;

  &::after {
    content: '';
    z-index: 50;
    position: absolute;
    width: 300px;
    height: 400px;
    left: -25px;
    bottom: 20px;
    ${getBgColor('primary100')}
  }
`

export type ProjectImageProps = {
  url: string
} & ThemeProps

export const ProjectImage = styled.figure<ProjectImageProps>`
  background-image: url(${(props: ProjectImageProps) => props.url});
  background-position: center;
  background-size: cover;
  height: 450px;
`
export const ProjectContent = styled.section`
  position: relative;
  z-index: 110;
`

export const ProjectHeader = styled.header`
  margin-top: 25px;
  display: flex;
  align-items: center;
`

export const ProjectHeading = styled(HeadingH4)`
  display: block;
  text-align: right;
  width: 225px;
  margin-right: 50px;
  margin-left: 25px;
  ${getColor('dark100')}
  ${getFontSize('headingMd')}
`
