import React from 'react'
import {
  ProjectsSectionWrapper,
  ProjectsHeader,
  ProjectsHeading,
  ProjectsInnerWrapper,
  ProjectItemWrapper,
  ProjectImage,
  ProjectHeader,
  ProjectHeading,
  ProjectContent
} from './projects-section.style'
import { Button } from 'components/button/button'

export const ProjectsSecton = () => (
  <ProjectsSectionWrapper>
    <ProjectsHeader>
      <ProjectsHeading>Nasze projekty i realizacje</ProjectsHeading>
    </ProjectsHeader>
    <ProjectsInnerWrapper>
      <ProjectItemWrapper>
        <ProjectContent>
          <ProjectImage url="projects/project1.jpg" />
          <ProjectHeader>
            <ProjectHeading>Projekty</ProjectHeading>
            <Button>Zobacz więcej</Button>
          </ProjectHeader>
        </ProjectContent>
      </ProjectItemWrapper>
      <ProjectItemWrapper>
        <ProjectContent>
          <ProjectImage url="projects/project2.jpg" />
          <ProjectHeader>
            <ProjectHeading>Realizacje</ProjectHeading>
            <Button>Zobacz więcej</Button>
          </ProjectHeader>
        </ProjectContent>
      </ProjectItemWrapper>
    </ProjectsInnerWrapper>
  </ProjectsSectionWrapper>
)
