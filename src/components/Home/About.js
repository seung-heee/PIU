import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import SponsoringCompany from "../about/SponsoringCompany.js";
import { images } from "../../utils/images.js";

const About = () => {
    return (
        <div className="About min-h-screen flex items-center justify-center">
            <div className="container mx-auto flex flex-col min-h-screen">
                <div className="flex justify-between items-center mb-2 flex-1">
                    <div className="AboutTitle pretendard-EB flex justify-end items-end">
                        <img src={images.PIULogo_back} alt="PIU_logo" className="w-52" />
                        <img src={images.PetInUniverse} alt="PetInUniverse" className="w-52 m-3" />
                    </div>
                    <div className="flex text-4xl">
                        <Link to='https://www.youtube.com/@piu_official675' target="_blank"><ImYoutube className="mx-2" /></Link>
                        <Link to='https://www.instagram.com/piukorea.official/' target="_blank"><AiFillInstagram className="mx-2" /></Link>
                        <Link to='http://pf.kakao.com/_FrbwG' target="_blank"><RiKakaoTalkFill className="mx-2" /></Link>
                    </div>
                </div>
                <div className="flex-1 AboutSub mt-5 mb-5 text-2xl">PIU는 메타버스로 가상세계에서 진행되는 유기견 캠페인을 통해 사회적 인식 개선과 유기견 입양률 증진에 힘쓰고자 합니다. <br />현재는 유기견 패션쇼와 사진전을 제작하고 있으며 나아가 PIU는 유기동물을 지키기 위해 최선을 다할 것 입니다.</div>
                <div>
                    <SponsoringCompany />
                </div>
                <hr className="my-5" />
                <div className="flex-1">
                    <div className="flex">
                        <Link to='#' target="_blank">이용약관</Link><BsDot />
                        <Link to='#' target="_blank">이용약관 개인정보처리방침</Link><BsDot />
                        <Link to='#' target="_blank">환불규정</Link>
                    </div>
                    <div className="text-md break-all">
                        상호명 : PIU | 대표: 편진범 | petinuniverse.gmail.com | 주소 : 경기도 안양시 만안구 성결대학로 53 재림관 602호 | TEL : 010-4159-6462
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;