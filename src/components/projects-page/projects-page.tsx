import React from 'react'
import { ProjectsPageWrapper, ProjectPageHeader, ProjectsList } from './projects-page.style'
import { ProjectItem } from 'components/project-item/project-item'
import { HeadingH3 } from 'components/headings/headings'
import { projectsInput } from 'inputs/projects.input'

export const ProjectsPage = () => (
  <ProjectsPageWrapper>
    <ProjectPageHeader>
      <HeadingH3>Nasze Projekty</HeadingH3>
    </ProjectPageHeader>
    <ProjectsList>
      {projectsInput.map((item, i) => (
        <ProjectItem key={i} item={item} />
      ))}
    </ProjectsList>
  </ProjectsPageWrapper>
)
