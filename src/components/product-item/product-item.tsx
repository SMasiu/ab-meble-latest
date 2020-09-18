import React, { useState } from 'react'
import { ProductItemWrapper, Img, ImgWrapper, SliderItem } from './product-item.style'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

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
    }
  ]

  return (
    <ProductItemWrapper>
      <CarouselProvider
        naturalSlideWidth={1200}
        naturalSlideHeight={350}
        totalSlides={items.length}
        dragEnabled={true}
        infinite={true}
        playDirection="forward"
        interval={5000}
        isPlaying={true}
        className="slider"
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
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </ProductItemWrapper>
  )
}
