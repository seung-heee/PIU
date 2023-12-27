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
                    <div className=' MainBlue Help3Title pretendard-EB text-5xl px-16 pt-16'>
                        <span className='RubikBubbles'>"BE YOUR FAMILY"</span>
                        <br />
                        <span className='text-black text-4xl Help3subTitle'>따듯한 가족의 특별함을 강조합니다.</span>
                    </div>
                    <div className='help3SecondSection w-full flex justify-start items-center break-keep'>
                        <div className='w-1/2 pretendard-B pl-16 whitespace-nowrap'>
                            <p className='text-4xl Help3Sub'>
                                <span className='MainBlue RubikBubbles'> “BE YOUR FAMILY!”</span>의 메시지를 전하며<br />
                                따뜻하고 온전한 가정을 만들어보세요.<br />

                            </p>
                            <p className='help3SecondSection_P text-xl mt-6 mb-12'>함께하는 즐거움을 품은 스마트톡으로 여러분의 가정에 특별한 이야기를 더하세요.</p>
                            <div className='bigBtn pretendard-EB text-center '>
                                <button onClick={() => { navigate('/buy') }} className='bg-sky-400 help3Btn p-6 text-5xl flex justify-center items-center mx-auto'>
                                    <p className='text-start'><span className='inline-block'>유기견 돕고</span><br />굿즈 받기</p>
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