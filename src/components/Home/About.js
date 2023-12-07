import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import SponsoringCompany from "../about/SponsoringCompany.js";

const About = () => {
    return (
        <div className="About min-h-screen flex items-center">
            <div className="container mx-auto flex flex-col">
                <div className="flex justify-between items-center mb-2">
                    <div className="AboutTitle pretendard-EB">PIU <span className="text-2xl AboutSmallTitle">Pet In Universe</span></div>
                    <div className="flex text-4xl">
                        <Link to='https://www.youtube.com/@piu_official675' target="_blank"><ImYoutube className="mx-2" /></Link>
                        <Link to='#' target="_blank"><AiFillInstagram className="mx-2" /></Link>
                        <Link to='#' target="_blank"><RiKakaoTalkFill className="mx-2" /></Link>
                    </div>
                </div>
                <div className="AboutSub mt-5 mb-5 text-2xl w-10/12">PIU는 유기견들을 지키기 위해 최선을 다합니다.PIU는 유vPIU는 유기견들을 지키기 위해 최선을 다합니다.PIU는 유기견들을 지키기 위해 최선을 다합니다.PIU는 유기견들을 지키기 위해 최선을 다합니다.PIU는 유기견들을 지키기 위해 최선을 다합니다.기견들을 지키기 위해 최선을 다합니다. PIU는 유기견들을 지키기 위해 최선을 다합니다 PIU는 유기견들을 지키기 위해 최선을 다합니다 </div>
                <div>
                    <SponsoringCompany />
                </div>
                <hr className="my-5" />
                <div>
                    <div className="flex">
                        <Link to='#' target="_blank">이용약관</Link><BsDot />
                        <Link to='#' target="_blank">이용약관 개인정보처리방침</Link><BsDot />
                        <Link to='#' target="_blank">환불규정</Link>
                    </div>
                    <div className="text-md break-all">
                        상호명 : PIU | 대표: 편진범 | asdf@naver.com | 사업자 번호 : 123-456-7894 | 통신판매업 신고번호 : 2019-강남서울-12345
                        주소 : 경기도 안양시 만안구 성결대학로 53 | TEL : 031-7895-7895
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;