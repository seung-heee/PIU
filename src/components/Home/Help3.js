import { images } from '../../utils/images';

const Help3 = () => {
    return (
        <div className="Help3 min-h-screen max-h-screen flex justify-center">
            <div className='flex flex-col container'>
                <div className=' Help3Title pretendard-EB text-5xl px-16 pt-10 pb-5'>"가상 동반자를 현실로"<br />
                    : 유기견 입양 캠페인
                </div>
                <div className='w-full flex justify-start items-center grow'>
                    <div className='w-1/2 pretendard-B pl-16 break-keep'>
                        <p className='text-3xl'>
                            PIU는 유기견을 지키고, <br />
                            그들에게 새로운 따뜻한 가족을 찾아주는 데  <br />
                            최선을 다할 것입니다
                        </p>
                        <p className='text-xl mt-6 mb-12'>우리가 함께할수록 위기에 처한 아이들을 위한 힘은 커집니다.</p>
                        <div className='w-96 pretendard-EB help3Btn text-4xl py-12 ml-12'>유기견을 돕고 굿즈 받기</div>
                    </div>
                    <div className='w-1/2'>
                        <img src={images.dogpng} alt="강쥐" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help3;