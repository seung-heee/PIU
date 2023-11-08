import '../../css/About.css';
import React, { Component } from "react";
import Slider from "react-slick";
import { images } from '../../utils/images';
import { BiSolidDonateHeart } from "react-icons/bi";

export default class SponsoringCompany extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className='h-44'>
                <p className='pretendard-B text-2xl flex items-center'>후원기업 <BiSolidDonateHeart className='ml-1' /></p>
                <Slider {...settings} className='SponsoringCompany'>
                    <div>
                        <img src={images.GoQba} alt="" />
                    </div>
                    <div>
                        <img src={images.GoQba} alt="" />
                    </div>
                    <div>
                        <img src={images.GoQba} alt="" />
                    </div>
                    <div>
                        <img src={images.GoQba} alt="" />
                    </div>
                    <div>
                        <img src={images.JSH} alt="" />
                    </div>
                    <div>
                        <img src={images.대한안전교육협회} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}