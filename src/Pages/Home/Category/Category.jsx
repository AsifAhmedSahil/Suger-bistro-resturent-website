import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
        <SectionTitle heading={"order online"} subHeading={"From 11.00 am to 10.00 pm"}>

        </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 mb-20 "
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='uppercase text-4xl text-white  text-center -mt-16'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='uppercase text-4xl text-white  text-center -mt-16'>pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='uppercase text-4xl text-white  text-center -mt-16'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='uppercase text-4xl text-white  text-center -mt-16'>Desurts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='uppercase text-4xl text-white  text-center -mt-16'>Salad</h3>
        </SwiperSlide>
        
        
      </Swiper>
    </section>
  )
}

export default Category
