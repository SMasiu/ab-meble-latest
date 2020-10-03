import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { RealizationItemImage } from './realization-list.style'

export interface DynamicImageProps {
  fileName: string
  alt: string
}

export const RealizationListDynamicImage: React.FC<DynamicImageProps> = ({ alt, fileName }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 450) {
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

      return <RealizationItemImage alt={alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)
