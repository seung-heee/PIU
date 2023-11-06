import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../css/Help2.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { images } from '../../utils/images';

const Help1 = () => {
    return (
        <>
            <div className='bg-sky-400 text-white'>
                <div className='Help1Box flex flex-col justify-center min-h-screen container mx-auto'>
                    <div className='Help1First pretendard-B text-5xl'>
                        <span className='inline-block mb-1'>유기견들은 여러분의 도움과 함께</span><br />
                        새로운 가족을 찾을 수 있습니다.
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
                            <img src={images.helpDog} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.back2} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.back3} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.back4} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.back5} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.main5} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.helpDog} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.back1} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.back1} />
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.back1} />
                        </SwiperSlide>
                    </Swiper>
                    <div className='Help1Last pretendard-R text-2xl mt-3 flex flex-col items-end justify-end'>
                        <p className='break-keep w-6/12 text-right'>
                            "PIU 유기견 캠페인과 함께 전국 유기견들이
                            새로운 삶을 살 수 있도록 힘이 되어주세요.
                            “SIORAE”도 유기견과 함께하겠습니다."
                        </p>
                        <p className='text-lg'>-유기견 후원 반려견 의류 기업 SIORAE 김화정 대표-</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Help1;