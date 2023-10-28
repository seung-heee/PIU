import { useNavigate, Link } from "react-router-dom";
import { images } from '../../utils/images';
import { AiFillInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { PiArrowFatLineRightBold } from "react-icons/pi";
const About = () => {
    const Navigate = useNavigate();

    return (
        <div className="About min-h-screen flex items-center">
            <div className="container mx-auto flex flex-col">
                <div className="flex justify-between items-center mb-5">
                    <div className="AboutTitle pretendard-EB">PIU <span className="text-2xl">Pet In Universe</span></div>
                    <button className="flex items-center pretendard-B text-xl" onClick={() => { Navigate('team') }}>
                        PIU TEAM<PiArrowFatLineRightBold className="ml-1" />
                    </button>
                </div>
                <div className="mt-5 mb-5 text-2xl w-10/12">PIU는 유기견들을 지키기 위해 최선을 다합니다.PIU는 유vPIU는 유기견들을 지키기 위해 최선을 다합니다.PIU는 유기견들을 지키기 위해 최선을 다합니다.PIU는 유기견들을 지키기 위해 최선을 다합니다.PIU는 유기견들을 지키기 위해 최선을 다합니다.기견들을 지키기 위해 최선을 다합니다. PIU는 유기견들을 지키기 위해 최선을 다합니다 PIU는 유기견들을 지키기 위해 최선을 다합니다 </div>
                <div className="flex text-4xl mb-10">
                    <Link to='#'><ImYoutube className="mx-2" /></Link>
                    <Link to='#'><AiFillInstagram className="mx-2" /></Link>
                    <Link to='#'><RiKakaoTalkFill className="mx-2" /></Link>
                </div>
                <div className="h-32 my-10">후원기업</div>
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