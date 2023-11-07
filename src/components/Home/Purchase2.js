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
        <button type='button' className="py-5 px-9 text-xl font-semibold rounded-lg shadow-md text-white bg-slate-800 hover:bg-white hover:text-slate-800">
            정기후원하고 굿즈받기
        </button>
    );
};

export default Purchase2;