import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from '../../utils/images';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../css/Help2.css';

// import required modules
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper/modules";
import PiuCampaignHori from "../Piece/PiuCampaignHori";

const Help1 = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-black relative">
                <PiuCampaignHori vertical={false} />
                <Swiper
                    autoplay={{
                        delay: 3000,
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
                            <div className="w-6/12 break-keep px-3 text-5xl">
                                <p>유기견들의 <span className="PointBlack">현실</span>은 우리가 생각하는 것보다 더 심각합니다.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="Help2-SwiperSlide">
                        <div className="w-full flex items-center justify-center text-center">
                            <img className='w-3/12 grayscale' src={images.img1} />
                            <div className="w-6/12 break-keep px-5 text-5xl">
                                <p>유기견에게 다가오는 <span className="PointBlack">현실</span>은 너무나도 힘듭니다.</p>
                                <p className="pretendard-R text-xl mt-2">지난해 130,401마리의 유실.유기 동물이 구조되었으나, 이 중 21% 약 28,000마리의 동물이 안락사되었습니다. </p>
                            </div>
                            <img className='w-3/12 grayscale' src={images.img2} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="Help2-SwiperSlide">
                        <div className="w-full flex items-center justify-center text-center">
                            <img className='w-3/12 grayscale ' src={images.img3} />
                            <div className="w-6/12 break-keep px-5 text-5xl">
                                <p>지금 우리가 가상에서 할 수 있는 작은 선택이 큰 <span className="PointBlack">현실</span>의 변화를 이끌 것 입니다.</p>
                                <p className="pretendard-R text-xl mt-2">지난해 130,401마리의 유실.유기 동물 중 입양률은 32.1%에 불과했다.</p></div>
                            <img className='w-3/12 grayscale' src={images.img4} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="Help2-SwiperSlide">
                        <div className="w-full flex items-center justify-center text-center">
                            <img className='w-3/12 grayscale' src={images.img5} />
                            <div className="w-6/12 break-keep px-5 text-5xl">
                                <p>
                                    우리는 유기견의 <span className="PointBlack">지금</span>을<br /> 바꿀 수 있습니다.<br />
                                    지금 PIU 팀이 되어주세요
                                </p>
                                <p className="pretendard-R text-xl mt-2">자연사·안락사 비율은 각각 25.8%, 15.7%로 여전히 동물보호센터에 입소된 개체의 40% 이상이 센터에서 생을 마감하는 것으로 나타났다.</p>

                            </div>
                            <img className='w-3/12 grayscale' src={images.img6} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Help1;