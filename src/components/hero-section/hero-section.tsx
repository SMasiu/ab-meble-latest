import React from 'react'
import {
  HeroSectionWrapper,
  HeroSectionInnerWrapper,
  HeroArticle,
  HeroHeader,
  HeaderWord,
  ArticleContent,
  HeroImageSection,
  HeroImageWrapper1,
  HeroImageWrapper2,
  HeroImage,
  SliderButtonWrapper,
  SliderButton,
  WaterMark,
  DecorateLine,
  ArticleQuotation
} from './hero-section.style'
import { HeadingH1, HeadingH2 } from 'components/headings/headings'
import { Button } from 'components/button/button'

export const HeroSection = () => (
  <HeroSectionWrapper>
    <DecorateLine />
    <WaterMark>meble</WaterMark>
    <HeroSectionInnerWrapper>
      <HeroArticle>
        <HeroHeader>
          <HeadingH1>AB Meble</HeadingH1>
          <HeadingH2>
            <HeaderWord>Meble</HeaderWord> <HeaderWord>biurowe</HeaderWord>
          </HeadingH2>
        </HeroHeader>
        <ArticleContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ab eveniet rerum
          voluptas atque deserunt ullam, consectetur eaque non ex.
        </ArticleContent>
        <Button>Pokaż więcej</Button>
        <ArticleQuotation>Zapweniamy dobre miejsce w Twoim biznesie.</ArticleQuotation>
      </HeroArticle>
      <HeroImageSection>
        <HeroImageWrapper2>
          <HeroImage src="chair2.png"></HeroImage>
        </HeroImageWrapper2>
        <HeroImageWrapper1>
          <HeroImage src="chair.png"></HeroImage>
        </HeroImageWrapper1>
      </HeroImageSection>
    </HeroSectionInnerWrapper>
    <SliderButtonWrapper>
      <SliderButton active={true} />
      <SliderButton active={false} />
      <SliderButton active={false} />
    </SliderButtonWrapper>
  </HeroSectionWrapper>
)
