import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MinimapImage } from './project-item.style'

export interface DynamicImageProps {
  fileName: string
  alt: string
}

export const ProjectSectionDynamicMinimapImage: React.FC<DynamicImageProps> = ({
  alt,
  fileName
}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n: any) => {
        return n.node.relativePath.includes(fileName)
      })
      if (!image) {
        return null
      }

      return <MinimapImage alt={alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)
