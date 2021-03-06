import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GalleryImg } from './product-item.style'

export interface DynamicImageProps {
  fileName: string
  alt: string
}

export const ProductMobileDynamicImage: React.FC<DynamicImageProps> = ({ alt, fileName }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
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

      return <GalleryImg alt={alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)
