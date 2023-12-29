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
const Help2 = () => {
    return (
        <>
            <div className='Help2 relative'>
                {/* <PiuCampaignHori vertical={true} /> */}
                <div className='Help1Box flex flex-col justify-center min-h-screen container mx-auto'>
                    <div className='Help1First pretendard-EB text-5xl text-center  '>
                        <span className='help2-title inline-block mb-1'>
                            유기견들은 여러분의 도움과 함께</span><br />
                        새로운 가족을 찾을 수 있습니다.
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

                        <SwiperSlide className='Help1-SwiperSlide flex'>
                            <img src={images.sor1} />
                            <div className='mb-5 grow text-end w-1/2 Help2Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    PIU 유기견 캠페인과 함께 전국 유기견들이
                                    새로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.    </p>
                                <p className='text-lg mt-10 help2name'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide flex'>
                            <img src={images.sor2} />
                            <div className='mb-5 grow text-end w-1/2 Help2Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>

                                    PIU 유기견 캠페인과 함께 전국 유기견들이
                                    새로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.
                                </p>
                                <p className='text-lg mt-10 help2name'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide flex'>
                            <img src={images.sor3} />
                            <div className='mb-5 grow text-end w-1/2 Help2Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    PIU 유기견 캠페인과 함께 전국 유기견들이
                                    새로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.   </p>
                                <p className='text-lg mt-10 help2name'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide flex'>
                            <img src={images.sor4} />
                            <div className='mb-5 grow text-end w-1/2 Help2Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    PIU 유기견 캠페인과 함께 전국 유기견들이
                                    새로운 삶을 살 수 있도록 힘이 되어주세요.
                                    “SIORAE”도 유기견과 함께하겠습니다.  </p>
                                <p className='text-lg mt-10 help2name'>- 유기견 후원 반려견 의류 기업 SIORAE 김화정 대표 -</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.heychales} />
                            <div className='mb-5 grow text-end w-1/2 Help2Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    헤이찰스는 수익의 일부를 유기견 후원에 기부합니다. 착한 소비로 좋은 제품을 만드는 것이 헤이찰스의 운영 정신입니다. 앞으로도 유기견 아이들을 돕고 관심을 가지도록 하겠습니다.   </p>
                                <p className='text-lg mt-10 help2name'>-유기견 후원 반려견 의류 기업 HEY, CHALES 안수림 대표-</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Help1-SwiperSlide'>
                            <img src={images.PIUTeam} />
                            <div className='mb-5 grow text-end w-1/2 Help2Last pretendard-R text-2xl mt-3 flex flex-col justify-end'>
                                <p className='break-keep'>
                                    성결대학교 창업동아리 PIU
                                    저희 각자의 소프트웨어 개발 전공을 살려 사회의 작지만 선한 영향을 미치고 싶습니다. 버려진 아이들이 반드시 좋은 새가족을 찾을 수 있도록 함께하겠습니다  </p>
                                <p className='text-lg mt-10 help2name'>메타버스 패션, 쇼핑 플랫폼 Pet In Universe 대표 편진범 외 14명</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </>
    );
}


export default Help2;