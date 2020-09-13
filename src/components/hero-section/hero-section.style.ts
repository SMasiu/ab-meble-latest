import styled, { css } from 'styled-components'
import { getPageWidth, getBgColor, getHeadingUnderline } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

export const HeroSectionWrapper = styled.section`
  height: calc(100vh - 80px);
  min-height: 800px;
  position: relative;
  ${getBgColor('light200')}
`

export const HeroSectionInnerWrapper = styled.section`
  ${getPageWidth}
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeroArticle = styled.article`
  margin-top: 25%;
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

export const HeroImageSection = styled.section`
  position: relative;
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

export const HeroImage = styled.img``

export const SliderButtonWrapper = styled.section`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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
`

export const DecorateLine = styled.span`
  position: absolute;
  left: 50px;
  top: 25%;
  height: 200px;
  width: 1px;
  ${getBgColor('dark300')}
`
