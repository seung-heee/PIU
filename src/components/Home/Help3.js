import { images } from '../../utils/images';
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaGift } from "react-icons/fa6";
import PiuTeam from '../Piece/PiuTeam';
import { useNavigate } from 'react-router-dom';

const Help3 = () => {
    const navigate = useNavigate();

    return (
        <div className="relative Help3 min-h-screen max-h-screen flex justify-center  text-white">
            <PiuTeam vertical={false} />
            <div className='container flex '>
                <div className='flex flex-col justify-center'>
                    <div className=' Help3Title pretendard-EB text-5xl px-16 pt-16'>"가상 동반자를 현실로"<br />
                        : 유기견 입양 캠페인
                    </div>
                    <div className='help3SecondSection w-full flex justify-start items-center break-keep'>
                        <div className='w-1/2 pretendard-B pl-16 whitespace-nowrap'>
                            <p className='text-4xl Help3Sub'>
                                PIU는 유기견을 지키고, 그들에게 새로운<br />
                                따뜻한 가족을 찾아주는데 최선을 다할 것입니다.
                            </p>
                            <p className='help3SecondSection_P text-xl mt-6 mb-12'>우리가 함께할수록 위기에 처한 아이들을 위한 힘은 커집니다.</p>
                            <div className='bigBtn pretendard-EB text-center '>
                                <button onClick={() => { navigate('/buy') }} className='bg-sky-400 help3Btn p-6 text-5xl flex justify-center items-center mx-auto'>
                                    <p className='text-start'><span className='inline-block'>유기견 돕고</span><br />스마트톡 키트받기</p>
                                    <FaGift size={80} className='help3arrowbtn ml-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img src={images.helpDog} alt="강쥐" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Help3;