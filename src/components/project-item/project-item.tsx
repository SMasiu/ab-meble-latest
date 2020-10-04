import React, { useState } from 'react'
import {
  ProjectItemWrapper,
  ProjectItemMinimap,
  ProjectItemArticle,
  ArticleHeader,
  ProjectItemContent,
  ArticleHeading,
  ArticleContent,
  ItemHeader
} from './project-item.style'
import { HeadingH5 } from 'components/headings/headings'
import { ProjectSectionDynamicMinimapImage } from './dynamic-minimap-image'
import { ProjectSectionDynamicPreviewImage } from './dynamic-preview-image'

export interface ProjectItemProps {
  item: {
    images: string[]
    header: string
    articleHeading: string
    articleContentLine1: string
    articleContentLine2: string
  }
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
  const [currentImg, setCurrentImg] = useState(0)

  return (
    <ProjectItemWrapper>
      <ItemHeader>
        <ArticleHeading>{item.header}</ArticleHeading>
      </ItemHeader>
      <ProjectItemContent>
        <ProjectItemMinimap>
          {item.images.map((img, i) => (
            <div onClick={() => setCurrentImg(i)} key={i}>
              <ProjectSectionDynamicMinimapImage fileName={img} alt="projekt" />
            </div>
          ))}
        </ProjectItemMinimap>
        <ProjectSectionDynamicPreviewImage fileName={item.images[currentImg]} alt="projekt" />
        <ProjectItemArticle>
          <ArticleHeader>
            <HeadingH5>Krzeło</HeadingH5>
          </ArticleHeader>
          <ArticleContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum
            commodi quos harum fuga odit quo aliquid numquam eos?
          </ArticleContent>
          <ArticleContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum
            commodi quos harum fuga odit quo aliquid numquam eos?
          </ArticleContent>
        </ProjectItemArticle>
      </ProjectItemContent>
    </ProjectItemWrapper>
  )
}
