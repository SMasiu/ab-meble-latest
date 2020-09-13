import React from 'react'
import {
  AboutSectionWrapper,
  AboutImageSection,
  AboutArtice,
  ImageWrapper,
  ArticleImage
} from './about-section.style'

export const AboutSection = () => (
  <AboutSectionWrapper>
    <AboutImageSection>
      <ImageWrapper>
        <ArticleImage src="about.png" alt="about"></ArticleImage>
      </ImageWrapper>
    </AboutImageSection>
    <AboutArtice></AboutArtice>
  </AboutSectionWrapper>
)
