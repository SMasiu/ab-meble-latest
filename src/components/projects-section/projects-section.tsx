import React from 'react'
import {
  ProjectsSectionWrapper,
  ProjectsHeader,
  ProjectsHeading,
  ProjectsInnerWrapper,
  ProjectItemWrapper,
  ProjectHeader,
  ProjectHeading,
  ProjectContent
} from './projects-section.style'
import { Button } from 'components/button/button'
import { Link } from 'gatsby'
import { ProjectSectionDynamicImage } from './dynamic-image'

export const ProjectsSecton = () => (
  <ProjectsSectionWrapper>
    <ProjectsHeader>
      <ProjectsHeading>Nasze projekty i realizacje</ProjectsHeading>
    </ProjectsHeader>
    <ProjectsInnerWrapper>
      <ProjectItemWrapper>
        <ProjectContent>
          <ProjectSectionDynamicImage fileName={`project_section_project.jpg`} alt="Projekty" />
          <ProjectHeader>
            <ProjectHeading>Projekty</ProjectHeading>
            <Link to="/projekty">
              <Button>Zobacz więcej</Button>
            </Link>
          </ProjectHeader>
        </ProjectContent>
      </ProjectItemWrapper>
      <ProjectItemWrapper>
        <ProjectContent>
          <ProjectSectionDynamicImage
            fileName={`project_section_realization.jpg`}
            alt="Realizacje"
          />
          <ProjectHeader>
            <ProjectHeading>Realizacje</ProjectHeading>
            <Link to="/realizacje">
              <Button>Zobacz więcej</Button>
            </Link>
          </ProjectHeader>
        </ProjectContent>
      </ProjectItemWrapper>
    </ProjectsInnerWrapper>
  </ProjectsSectionWrapper>
)
