import styled, { css } from 'styled-components'
import { getPageWidth, getBgColor, getHeadingUnderline } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'
import Img from 'gatsby-image'

export const HeroSectionWrapper = styled.section`
  height: calc(100vh - 80px);
  min-height: 800px;
  position: relative;
  margin-bottom: 100px;
  ${getBgColor('light200')}

  @media (max-width: 1350px) {
    min-height: 550px;
    height: auto;
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
`

export const HeroSectionInnerWrapper = styled.section`
  ${getPageWidth}
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1350px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const HeroArticle = styled.article`
  margin-top: 25%;
  @media (max-width: 1350px) {
    margin-top: 10%;
  }

  @media (max-width: 1024px) {
    justify-self: center;
  }
`

export const HeroHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  ${getHeadingUnderline}
`

export const HeaderWord = styled.span`
  display: block;
  line-height: 150%;
`

export const ArticleContent = styled.p`
  margin: 30px 0 15px;
  max-width: 500px;
`

export const ArticleQuotationWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 100px;

  @media (max-width: 1350px) {
    bottom: 25px;
  }
`

export const ArticleQuotation = styled.p`
  ${getPageWidth}
  display: block;
  font-style: italic;

  @media (max-width: 1350px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const HeroImageSection = styled.section`
  position: relative;
  @media (max-width: 1024px) {
    padding: 50px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 650px) {
    padding: 25px 0;
  }
`

export const HeroImageWrapper = styled.figure`
  position: absolute;
  width: 500px;

  &::after {
    content: '';
    position: absolute;
    bottom: 100px;
    left: -45px;
    width: 75%;
    height: 50%;
    border-radius: 50%;
    background-color: #3b3b3b22;
    filter: blur(25px);
    transform: skew(-15deg, 45deg);
  }

  @media (max-width: 1650px) {
    &::after {
      content: none;
    }
  }

  @media (max-width: 1350px) {
    width: 50%;
    bottom: -225px;
  }

  @media (max-width: 1024px) {
    position: static;
    transform: scaleX(-1) translateX(0);
  }
`

export const HeroImageWrapper1 = styled(HeroImageWrapper)`
  left: 25%;
  bottom: -75px;
  transform: scaleX(-1) translateX(50%);
`

export const HeroImageWrapper2 = styled(HeroImageWrapper)`
  left: 75%;
  bottom: 10px;
  transform: scaleX(-1) translateX(50%);
  width: 375px;
`

export const HeroImage: any = styled(Img)``

export const SliderButtonWrapper = styled.section`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1350px) {
    bottom: 25px;
  }
`

export type SliderButtonProps = {
  active: boolean
} & ThemeProps

export const SliderButton = styled.button<SliderButtonProps>`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${({ theme, active }: SliderButtonProps) => css`
    background-color: ${active ? theme.colors.primary100 : '#d1d1d1'};
  `}
`

export const WaterMark = styled.p`
  position: absolute;
  top: 250px;
  right: 0;
  font-size: 450px;
  opacity: 0.025;
  font-weight: 800;
  transform: translate(32.5%, 50%) rotate(90deg);
  text-transform: uppercase;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const DecorateLine = styled.span`
  position: absolute;
  left: 50px;
  top: 25%;
  height: 200px;
  width: 1px;
  ${getBgColor('dark300')}

  @media (max-width: 1600px) {
    left: 20px;
  }

  @media (max-width: 1350px) {
    display: none;
  }
`
