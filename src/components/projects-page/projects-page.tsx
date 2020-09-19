import React from 'react'
import { ProjectsPageWrapper, ProjectPageHeader, ProjectsList } from './projects-page.style'
import { ProjectItem } from 'components/project-item/project-item'
import { HeadingH3 } from 'components/headings/headings'
import { PATH_PREFIX } from 'common/path'

const items = [
  {
    images: [
      `${PATH_PREFIX}/projects/project2.jpg`,
      `${PATH_PREFIX}/projects/project1.jpg`,
      `${PATH_PREFIX}/projects/project2.jpg`
    ],
    articleHeading: 'Krzeło',
    articleContentLine1: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum
    commodi quos harum fuga odit quo aliquid numquam eos`,
    articleContentLine2: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum
    commodi quos harum fuga odit quo aliquid numquam eos`,
    header: `Krzesła`
  },
  {
    images: [
      `${PATH_PREFIX}/projects/project2.jpg`,
      `${PATH_PREFIX}/projects/project1.jpg`,
      `${PATH_PREFIX}/projects/project2.jpg`
    ],
    articleHeading: 'Krzeło',
    articleContentLine1: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum
    commodi quos harum fuga odit quo aliquid numquam eos`,
    articleContentLine2: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum
    commodi quos harum fuga odit quo aliquid numquam eos`,
    header: `Krzesła`
  }
]

export const ProjectsPage = () => (
  <ProjectsPageWrapper>
    <ProjectPageHeader>
      <HeadingH3>Nasze Projekty</HeadingH3>
    </ProjectPageHeader>
    <ProjectsList>
      {items.map((item, i) => (
        <ProjectItem key={i} item={item} />
      ))}
    </ProjectsList>
  </ProjectsPageWrapper>
)
