import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";


const CarouselContainer= styled.div`
  width : 100%;
  display: flex;
`
const BannerImg = styled.img`
  width : 100%;
  margin: auto;
`
export default function SimpleSlider() {
  //https://poew.tistory.com/707
    var settings = {
      dots:false,
      infinite: true,
      autoplay:true,
      autoplaySpeed :3000,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <>
        <div className='pt-10'>
          <Slider {...settings}>
            <CarouselContainer>
              <BannerImg src="/images/carousel_sample_1.jpg"/>
            </CarouselContainer>
            <CarouselContainer>
              <BannerImg src="/images/carousel_sample_2.jpg"/>
            </CarouselContainer>
            <CarouselContainer>
              <BannerImg src="/images/carousel_sample_3.jpg"/>
            </CarouselContainer>
            <CarouselContainer>
              <BannerImg src="/images/carousel_sample_4.jpg"/>
            </CarouselContainer>
              {/* <section className='h-96 bg-yellow-900 relative'>
                <div className='w-full h-full bg-cover bg-banner opacity-70' />
                  <div className='absolute w-full h-full top-32 text-center text-gray-50 drop-shadow-2xl'>
                    <h2 className='text-6xl'>Shop With US</h2>
                    <p className='text-2xl'>Best Products, High Quality</p>
                  </div>
              </section>

              <section className='h-96 bg-yellow-900 relative'>
                <div className='w-full h-full bg-cover bg-banner1 opacity-70' />
                  <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
                    <h2 className='text-6xl'>Shop With US2</h2>
                    <p className='text-2xl'>Best Products, High Quality</p>
                  </div>
              </section> */}
          </Slider>
        </div>
      </>      
    );
  }


