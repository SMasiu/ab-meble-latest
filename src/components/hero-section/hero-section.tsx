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
  SliderButtonWrapper,
  SliderButton,
  WaterMark,
  DecorateLine,
  ArticleQuotation,
  ArticleQuotationWrapper
} from './hero-section.style'
import { HeadingH1, HeadingH2 } from 'components/headings/headings'
import { Button } from 'components/button/button'
import { HeroDynamicImage } from './dynamic-image'
import { Link } from 'gatsby'

export const HeroSection = () => (
  <HeroSectionWrapper>
    <DecorateLine />
    <WaterMark>meble</WaterMark>
    <ArticleQuotationWrapper>
      <ArticleQuotation>Zapweniamy dobre miejsce w Twoim biznesie.</ArticleQuotation>
    </ArticleQuotationWrapper>
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
        <Link to="/#o-firmie">
          <Button>Pokaż więcej</Button>
        </Link>
      </HeroArticle>
      <HeroImageSection>
        <HeroImageWrapper2>
          <HeroDynamicImage fileName={`hero_chair2.png`} alt="chair" />
        </HeroImageWrapper2>
        <HeroImageWrapper1>
          <HeroDynamicImage fileName={`hero_chair1.png`} alt="chair" />
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
