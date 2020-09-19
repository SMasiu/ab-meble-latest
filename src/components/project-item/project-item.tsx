import React, { useState } from 'react'
import {
  ProjectItemWrapper,
  ProjectItemMinimap,
  MinimapImage,
  ProjectItemImage,
  ProjectItemArticle,
  ArticleHeader,
  ProjectItemContent,
  ArticleHeading,
  ArticleContent,
  ItemHeader
} from './project-item.style'
import { HeadingH5 } from 'components/headings/headings'

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
            <MinimapImage key={i} url={img} onClick={() => setCurrentImg(i)} />
          ))}
        </ProjectItemMinimap>
        <ProjectItemImage url={item.images[currentImg]} />
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
