import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BiSolidQuoteRight } from 'react-icons/bi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../css/Help2.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { images } from '../../utils/images';
import PiuCampaignHori from '../Piece/PiuCampaignHori';

const Help2 = () => {
    return (
        <>
            <div className='bg-sky-400 text-white relative'>
                <PiuCampaignHori vertical={true} />
                <div className='Help1Box flex flex-col justify-center min-h-screen container mx-auto'>
                    <div className='Help1First pretendard-B text-5xl'>
                        <span className='inline-block mb-1'>
                            <BiSolidQuoteLeft className='inline-block mb-7' size={30} /> 유기견들은 여러분의 도움과 함께</span><br />
                        새로운 가족을 찾을 수 있습니다. <BiSolidQuoteRight className='inline-block mb-7' size={30} />
                    </div>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        className="Help1-Swiper"
                    >
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img1} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img3} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img5} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img10} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img9} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img6} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img7} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img8} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img4} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img9} />
                        </SwiperSlide>
                    </Swiper>
                    <div className='Help1Last pretendard-R text-2xl mt-3 flex flex-col items-end justify-end'>
                        <p className='break-keep w-6/12 text-right'>
                            <BiSolidQuoteLeft className='inline-block mb-5' size={12} /> PIU 유기견 캠페인과 함께 전국 유기견들이
                            새로운 삶을 살 수 있도록 힘이 되어주세요.
                            “SIORAE”도 유기견과 함께하겠습니다.  <BiSolidQuoteRight className='inline-block mb-5' size={12} />
                        </p>
                        <p className='text-lg'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Help2;