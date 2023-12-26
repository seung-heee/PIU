import { images } from '../../utils/images';
import '../../css/Buy.css';

const Siorae = () => {
    window.location = 'https://m.siorae.com/';
};
const heychales = () => {
    window.location = 'https://smartstore.naver.com/moii';
};
const BuyBottom = () => {
    return (
        <div className="BuyBottom">
            <div className='container'>
                <img src={images.s_page1} alt="상세페이지1"/>
                <p className='buyb-t1 mt-10 text-2xl'>01.PIU 유기견 봉사활동 브이로그</p>
                <div className="Youtube-v text-center flex justify-center">
                    <iframe src="https://www.youtube.com/embed/BMrZ2R1KNW8?si=70fPoRw-NjlQjoAV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <p className='buyb-t1 mt-10 text-2xl'>02.PIU 유기견 캠페인 제작 브이로그</p>
                <div className="Youtube-v text-center flex justify-center mb-10">
                    <iframe src="https://www.youtube.com/embed/hoaWDeA7y7E?si=NhDUPFqrvh1rfZzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <img src={images.s_page2} alt="상세페이지2"/>
                <div className='btn-set w-full flex justify-center mt-10'>
                    <button className='btn-1 mt-5 mr-6 text-4xl font-semibold bg-[#0400CF] p-6 text-white rounded-xl' onClick={Siorae}>시오래에서 구매하기</button>
                    <button className='btn-2 mt-5 ml-6 text-4xl font-semibold bg-[#0400CF] p-6 text-white rounded-xl' onClick={heychales}>헤이찰스에서 구매하기</button>
                </div>
                <img src={images.s_page3} alt="상세페이지3"/>
            </div>
        </div>
    )
}

export default BuyBottom;