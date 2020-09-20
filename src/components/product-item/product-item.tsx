import React, { useState } from 'react'
import {
  ProductItemWrapper,
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
  MinimapPrevBtn,
  MinimapNextBtn,
  CarouselMinimapProvider,
  GalleryItem,
  GalleryWrapper,
  GalleryImg
} from './product-item.style'
import { Slider, Slide, CarouselProvider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Button } from 'components/button/button'
import { HeadingH3, HeadingH4 } from 'components/headings/headings'
import { ArrowButton } from 'components/arrow-button/arrow-button'

export interface Product {
  items: { img: string }[]
  heading: string
  subHeading: string
}

export interface ProductProps {
  product: Product
}

export const ProductItem: React.FC<ProductProps> = ({
  product: { items, heading, subHeading }
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const handleNextSlide = () =>
    setCurrentSlide(currentSlide === items.length - 1 ? 0 : currentSlide + 1)
  const handlePrevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? items.length - 1 : currentSlide - 1)

  return (
    <ProductItemWrapper>
      <ProductHeader>
        <HeadingH3>{heading}</HeadingH3>
        <HeadingH4>{subHeading}</HeadingH4>
      </ProductHeader>
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={1400}
          naturalSlideHeight={700}
          totalSlides={items.length}
          dragEnabled={true}
          infinite={true}
          playDirection="forward"
          currentSlide={currentSlide}
        >
          <Slider>
            {items.map((item, i) => (
              <Slide index={i} key={i}>
                <SliderItem>
                  <ImgWrapper url={item.img} />
                </SliderItem>
              </Slide>
            ))}
          </Slider>
          <SliderButtons>
            <ButtonBackStyled onClick={handlePrevSlide}>
              <Button>Poprzednie</Button>
            </ButtonBackStyled>

            <ButtonNextStyled onClick={handleNextSlide}>
              <Button>Następne</Button>
            </ButtonNextStyled>
          </SliderButtons>
          <MinimapWrapper>
            <CarouselMinimapProvider
              naturalSlideWidth={200}
              naturalSlideHeight={65}
              totalSlides={items.length}
              dragEnabled={true}
              infinite={true}
              playDirection="forward"
              visibleSlides={6}
            >
              <MinimapPrevBtn>
                <ArrowButton direction="left" />
              </MinimapPrevBtn>
              <Slider>
                {items.map((item, i) => (
                  <Slide index={i} key={i}>
                    <MinimapItemWrapper onClick={() => setCurrentSlide(i)}>
                      <MinimapImgWrapper url={item.img}></MinimapImgWrapper>
                    </MinimapItemWrapper>
                  </Slide>
                ))}
              </Slider>
              <MinimapNextBtn>
                <ArrowButton />
              </MinimapNextBtn>
            </CarouselMinimapProvider>
          </MinimapWrapper>
        </CarouselProvider>
      </SliderWrapper>
      <GalleryWrapper>
        {items.map((item, i) => (
          <GalleryItem key={i}>
            <GalleryImg src={item.img} alt="product" />
          </GalleryItem>
        ))}
      </GalleryWrapper>
    </ProductItemWrapper>
  )
}
