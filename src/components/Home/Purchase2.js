import React from 'react';
import '../../css/Purchase.css';
import { images } from '../../utils/images';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';

const Purchase2 = () => {
    return (
        <div className="min-h-screen">
            <div className='container flex flex-col justify-center items-center mx-auto h-screen'>
                <div className='carousel flex justify-center'>
                    <Swiper
                        className='Purchase-swiper'
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        effect={'coverflow'}
                        centeredSlides={true}
                        grabCursor={true}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 100,
                            depth: 80,
                            modifier: 1.5,
                            slideShadows: true
                        }}
                        loop={true}
                        loopAdditionalSlides={1}
                        pagination={{
                            el: '.Purchase-swiper-pagination',
                            clickable: true
                        }}
                        slidesPerView={2}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            '@0.75': {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                            '@1.00': {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            }
                        }}
                    >
                        <SwiperSlide className='Purchase-swiper-slide'>
                            <img src={images.tok4} alt="그립톡" className="giftimg" />
                        </SwiperSlide>
                        <SwiperSlide className='Purchase-swiper-slide'>
                            <img src={images.tok2} alt="그립톡" className="giftimg" />
                        </SwiperSlide>
                        <SwiperSlide className='Purchase-swiper-slide'>
                            <img src={images.tok3} alt="그립톡" className="giftimg" />
                        </SwiperSlide>
                        <SwiperSlide className='Purchase-swiper-slide'>
                            <img src={images.tok2} alt="그립톡" className="giftimg" />
                        </SwiperSlide>
                        <SwiperSlide className='Purchase-swiper-slide'>
                            <img src={images.tok2} alt="그립톡" className="giftimg" />
                        </SwiperSlide>
                        <div className="wrap">
                            <div className="target" data-scale="2" data-image={images.tok}></div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className='Purchase-swiper-pagination'></div>
                    </Swiper>
                </div>
                <div className='button1 flex justify-center items-center w-full'>
                    <button type='button' className="py-5 px-9 text-xl font-semibold rounded-lg shadow-md text-white bg-slate-800 hover:bg-white hover:text-slate-800">
                        후원하고 스마트톡 키트 받기
                    </button>
                </div>
            </div >
        </div>
    );
};

export default Purchase2;