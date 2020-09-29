import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ImgWrapper } from './product-item.style'

export interface DynamicImageProps {
  fileName: string
  alt: string
}

export const GalleryDynamicImage: React.FC<DynamicImageProps> = ({ alt, fileName }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1200) {
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

      return <ImgWrapper alt={alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)
