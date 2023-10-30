import { images } from '../../utils/images';
import { PiArrowUpRightBold } from "react-icons/pi";

const Help3 = () => {
    return (
        <div className="Help3 min-h-screen max-h-screen flex justify-center">
            <div className='container flex'>
                <div className='flex flex-col justify-center'>
                    <div className=' Help3Title pretendard-EB text-5xl px-16 pt-16 pb-5'>"가상 동반자를 현실로"<br />
                        : 유기견 입양 캠페인
                    </div>
                    <div className='w-full flex justify-start items-center'>
                        <div className='w-1/2 pretendard-B pl-16 whitespace-nowrap'>
                            <p className='text-4xl'>
                                PIU는 유기견을 지키고, 그들에게 새로운 <br />
                                따뜻한 가족을 찾아주는데 최선을 다할 것입니다.
                            </p>
                            <p className='text-xl mt-6 mb-12'>우리가 함께할수록 위기에 처한 아이들을 위한 힘은 커집니다.</p>
                            <div className='pretendard-EB text-center'>
                                <button className='help3Btn p-3 text-5xl flex justify-center items-center mx-auto'>
                                    <p className='text-end'><span className='mb-1 inline-block'>유기견 돕고 </span><br />굿즈 받기</p>
                                    <PiArrowUpRightBold size={130} />
                                </button>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img src={images.dogpng} alt="강쥐" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Help3;