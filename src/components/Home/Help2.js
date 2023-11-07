import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from '../../utils/images';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper/modules";

const Help2 = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-black">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    direction={"vertical"}
                    effect={"flip"}
                    grabCursor={true}
                    modules={[Autoplay, EffectFlip, Pagination, Navigation]}
                    className="Help2-Swiper"
                >
                    <SwiperSlide className="Help2-SwiperSlide">
                        <div className="w-full flex items-center justify-center text-center">
                            <img className='w-3/12' src={images.back1} />
                            <div className="w-6/12">유기견들의 현실은 <br />우리가 생각하는 것보다 더 <span className="PointBlack">심각 </span>합니다.</div>
                            <img className='w-3/12' src={images.back2} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="Help2-SwiperSlide">
                        <div className="w-full flex items-center justify-center text-center">
                            <img className='w-3/12' src={images.back3} />
                            <div className="w-6/12">
                                유기견에게 <span className="PointBlack">"지금"</span> 은 <br />다시 돌아오지 않는 시간입니다.
                            </div>
                            <img className='w-3/12' src={images.back4} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="Help2-SwiperSlide">
                        <div className="w-full flex items-center justify-center text-center">
                            <img className='w-3/12' src={images.back2} />
                            <div className="w-6/12">
                                변화가 필요합니다.
                            </div>
                            <img className='w-3/12' src={images.back5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="Help2-SwiperSlide">
                        <div className="w-full flex items-center justify-center text-center">
                            <img className='w-3/12' src={images.main5} />
                            <div className="w-6/12">
                                우리는 유기견의 <span className="PointBlack">"지금"</span> 을 바꿀 수 있습니다.<br />
                                지금 PIU 팀이 되어주세요
                            </div>
                            <img className='w-3/12' src={images.helpDog} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="Help2-SwiperSlide">
                        <div className="w-full flex items-center justify-center text-center">
                            <img className='w-3/12' src={images.back1} />
                            <div className="w-6/12">
                                지금 우리가 할 수 있는 <span className="PointBlack">작은 선택</span> 이<br /> 큰 변화를
                                이끌 것입니다.
                            </div>
                            <img className='w-3/12' src={images.back1} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Help2;