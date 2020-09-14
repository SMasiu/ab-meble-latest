import React from 'react'
import {
  AboutSectionWrapper,
  AboutImageSection,
  AboutArtice,
  ImageWrapper,
  ArticleImage,
  AboutHeader,
  AboutContent,
  AboutContentWrapper
} from './about-section.style'
import { HeadingH3, HeadingH4 } from 'components/headings/headings'

export const AboutSection = () => (
  <AboutSectionWrapper>
    <AboutImageSection>
      <ImageWrapper>
        <ArticleImage src="about.png" alt="about"></ArticleImage>
      </ImageWrapper>
    </AboutImageSection>
    <AboutArtice>
      <AboutHeader>
        <HeadingH3>O firmie</HeadingH3>
        <HeadingH4>Sub heading</HeadingH4>
      </AboutHeader>
      <AboutContentWrapper>
        <AboutContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, labore veritatis
          molestias, optio error est ratione corporis quod cumque non dolorem, ipsam nostrum eius
          placeat id illo odio soluta eum?
        </AboutContent>
        <AboutContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, labore veritatis
          molestias, optio error est ratione corporis quod cumque non dolorem, ipsam nostrum eius
          placeat id illo odio soluta eum?
        </AboutContent>
      </AboutContentWrapper>
    </AboutArtice>
  </AboutSectionWrapper>
)