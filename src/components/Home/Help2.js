import React from 'react';
// Import Swiper React components
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BiSolidQuoteRight } from 'react-icons/bi';
import '../../css/Help2.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// import required modules
import { images } from '../../utils/images';
import PiuCampaignHori from '../Piece/PiuCampaignHori';

const Help2 = () => {
    return (
        <>
            <div className='Help2 relative'>
                <PiuCampaignHori vertical={true} />
                <div className='Help1Box flex flex-col justify-center min-h-screen container mx-auto'>
                    <div className='Help1First pretendard-EB text-5xl text-center'>
                        <span className='inline-block mb-1'>
                            <BiSolidQuoteLeft className='inline-block mb-7' size={30} /> 유기견들은 여러분의 도움과 함께</span><br />
                        새로운 가족을 찾을 수 있습니다. <BiSolidQuoteRight className='inline-block mb-7' size={30} />
                    </div>
                    <Swiper
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="Help1-Swiper"
                    >
                        <SwiperSlide className='Help1-SwiperSlide flex w-full'>
                            <img src={images.Help2_img1} className='w-1/2' />
                            <div className='mb-5 grow text-end w-1/2 Help1Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    <BiSolidQuoteLeft className='inline-block mb-5' size={12} /> PIU 유기견 캠페인과 함께 전국 유기견들이
                                    새로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.  <BiSolidQuoteRight className='inline-block mb-5' size={12} />
                                </p>
                                <p className='text-lg'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img3} />
                            <div className='mb-5 grow text-end w-1/2 Help1Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    <BiSolidQuoteLeft className='inline-block mb-5' size={12} /> aaaPIU 유기견 캠페인과 함께 전국 유기견들이
                                    aaaa새로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.  <BiSolidQuoteRight className='inline-block mb-5' size={12} />
                                </p>
                                <p className='text-lg'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img5} />
                            <div className='mb-5 grow text-end w-1/2 Help1Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    <BiSolidQuoteLeft className='inline-block mb-5' size={12} />ddfPIU 유기견 캠페인과 함께 전국 유기견들이
                                    ssssssss새로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.  <BiSolidQuoteRight className='inline-block mb-5' size={12} />
                                </p>
                                <p className='text-lg'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img10} />
                            <div className='mb-5 grow text-end w-1/2 Help1Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    <BiSolidQuoteLeft className='inline-block mb-5' size={12} /> PIU 유기견 캠페인과 함께 전국 유기견들이
                                    새fdfdf로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.  <BiSolidQuoteRight className='inline-block mb-5' size={12} />
                                </p>
                                <p className='text-lg'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.Help2_img9} />
                            <div className='mb-5 grow text-end w-1/2 Help1Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    <BiSolidQuoteLeft className='inline-block mb-5' size={12} /> PIU 유기견 캠페인과 함께 전국 유기견들이
                                    새로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.  <BiSolidQuoteRight className='inline-block mb-5' size={12} />
                                </p>
                                <p className='text-lg'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </>
    );
}


export default Help2;