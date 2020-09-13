import React from 'react'
import {
  HeroSectionWrapper,
  HeroSectionInnerWrapper,
  HeroArticle,
  HeroHeader,
  HeaderWord,
  ArticleContent,
  HeroImageSection
} from './hero-section.style'
import { HeadingH1, HeadingH2 } from 'components/headings/headings'
import { Button } from 'components/button/button'

export const HeroSection = () => (
  <HeroSectionWrapper>
    <HeroSectionInnerWrapper>
      <HeroArticle>
        <HeroHeader>
          <HeadingH1>AB Meble</HeadingH1>
          <HeadingH2>
            <HeaderWord>Meble</HeaderWord> <HeaderWord>biórowe</HeaderWord>
          </HeadingH2>
        </HeroHeader>
        <ArticleContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ab eveniet rerum
          voluptas atque deserunt ullam, consectetur eaque non ex.
        </ArticleContent>
        <Button>Show more</Button>
      </HeroArticle>
      <HeroImageSection></HeroImageSection>
    </HeroSectionInnerWrapper>
  </HeroSectionWrapper>
)
