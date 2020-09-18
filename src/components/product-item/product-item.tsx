import React, { useState } from 'react'
import {
  ProductItemWrapper,
  Img,
  ImgWrapper,
  SliderItem,
  ButtonBackStyled,
  ButtonNextStyled,
  SliderButtons,
  ProductHeader,
  SliderWrapper,
  MinimapWrapper,
  MinimapItemWrapper,
  MinimapImgWrapper,
  CounterText
} from './product-item.style'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Button } from 'components/button/button'
import { HeadingH3, HeadingH4 } from 'components/headings/headings'

export const ProductItem = () => {
  const items = [
    {
      img: '/products/product1.png'
    },
    {
      img: '/products/product2.png'
    },
    {
      img: '/products/product3.png'
    },
    {
      img: '/products/product4.png'
    },
    {
      img: '/products/product1.png'
    },
    {
      img: '/products/product2.png'
    },
    {
      img: '/products/product3.png'
    },
    {
      img: '/products/product4.png'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const handleNextSlide = () =>
    setCurrentSlide(currentSlide === items.length - 1 ? 0 : currentSlide + 1)
  const handlePrevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? items.length - 1 : currentSlide - 1)

  return (
    <ProductItemWrapper>
      <ProductHeader>
        <HeadingH3>Krzesła i fotele konferencyjne</HeadingH3>
        <HeadingH4>Produkty</HeadingH4>
      </ProductHeader>
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={1200}
          naturalSlideHeight={350}
          totalSlides={items.length}
          dragEnabled={false}
          infinite={true}
          playDirection="forward"
          currentSlide={currentSlide}
        >
          <Slider>
            {items.map((item, i) => (
              <Slide index={i} key={i}>
                <SliderItem>
                  <ImgWrapper>
                    <Img src={item.img} alt="produkt" />
                  </ImgWrapper>
                </SliderItem>
              </Slide>
            ))}
          </Slider>
          <SliderButtons>
            <ButtonBackStyled onClick={handlePrevSlide}>
              <Button>Poprzednie</Button>
            </ButtonBackStyled>
            <CounterText>
              {currentSlide + 1} z {items.length}
            </CounterText>
            <ButtonNextStyled onClick={handleNextSlide}>
              <Button>Następne</Button>
            </ButtonNextStyled>
          </SliderButtons>
          <MinimapWrapper>
            <CarouselProvider
              naturalSlideWidth={200}
              naturalSlideHeight={200}
              totalSlides={items.length}
              dragEnabled={false}
              infinite={true}
              playDirection="forward"
              visibleSlides={7}
            >
              <Slider>
                {items.map((item, i) => (
                  <Slide index={i} key={i}>
                    <MinimapItemWrapper onClick={() => setCurrentSlide(i)}>
                      <MinimapImgWrapper>
                        <Img src={item.img} alt="produkt" />
                      </MinimapImgWrapper>
                    </MinimapItemWrapper>
                  </Slide>
                ))}
              </Slider>
            </CarouselProvider>
          </MinimapWrapper>
        </CarouselProvider>
      </SliderWrapper>
    </ProductItemWrapper>
  )
}
