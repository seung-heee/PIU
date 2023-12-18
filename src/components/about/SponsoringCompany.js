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
            <div className='SponsoringCompanyBox'>
                <p className='pretendard-B text-2xl flex items-center'>후원기업 <BiSolidDonateHeart className='ml-1' /></p>
                <Slider {...settings} className='SponsoringCompany0'>
                    <div>
                        <img src={images.sungkyul} alt="sungkyul" />
                    </div>
                    <div>
                        <img src={images.siorae} alt="siorae" className='smallsponsor' />
                    </div>
                    <div>
                        <img src={images.safetykorea} alt="safetykorea" />
                    </div>
                    <div>
                        <img src={images.heychales} alt="heychales" className='smallsponsor' />
                    </div>
                    <div>
                        <img src={images.goqba} alt="goqba" />
                    </div>
                    <div>
                        <img src={images.anayng} alt="anayng" />
                    </div>
                </Slider>
            </div>
        );
    }
}