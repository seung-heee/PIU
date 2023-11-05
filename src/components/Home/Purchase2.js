import React from 'react';
import '../../css/Purchase.css';
import { images } from '../../utils/images';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Navigation } from 'swiper'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

/*const imageUrls = [
    { src: images.tok },
    { src: images.tok },
    { src: images.tok },
    { src: images.tok },
    { src: images.tok }
  ];*/
  
const Purchase2 = () => {
  return (
    <div className="section min-h-screen">
        <div className='carousel flex justify-center'>
            <Swiper
            className='myswiper'
            modules={[Pagination, EffectCoverflow, Navigation]}
            effect={"coverflow"}
            centeredSlides={"true"}
            coverflowEffect={{
                rotate: 0,
                stretch: 100,
                depth: 50,
                modifier: 1.5,
                slideShadows: true
            }}
            loop={true}
            loopAdditionalSlides={1}
            pagination={{
                el: '.swiper-pagination',
                      clickable: true
              }}
            slidesPerView={2}
            spaceBetween={10}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            breakpoints={{
                '@0.75':{
                    slidesPerView:1,
                    spaceBetween:50,
                },
                '@1.00':{
                    slidesPerView:2,
                    spaceBetween:40,
                },
                '@1.50':{
                    slidesPerView:2,
                    spaceBetween: 50,
                }
            }}
            >
                <SwiperSlide>
                    <img src={images.tok} alt="그립톡" className="giftimg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.tok} alt="그립톡" className="giftimg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.tok} alt="그립톡" className="giftimg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.tok} alt="그립톡" className="giftimg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.tok} alt="그립톡" className="giftimg" />
                </SwiperSlide>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className='swiper-pagination'></div>
            </Swiper>
        </div>
        <div className='button1 flex justify-center items-center w-full'>
                <button type='button' className="py-5 px-9 text-xl font-semibold rounded-lg shadow-md text-white bg-slate-800 hover:bg-white hover:text-slate-800">
                        정기후원하고 굿즈받기
                    </button>
                </div>
    </div>
  );
};

export default Purchase2;