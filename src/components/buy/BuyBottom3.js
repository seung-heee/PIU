import { images } from '../../utils/images';
import '../../css/Buy.css';

const BuyBottom = () => {
    return (
        <div className="BuyBottom">
                <div className="container1 mx-auto">
                        <div className="w-full flex min-h-screen max-h-screen bg-[#93BC78]">
                            <div className='box1 flex justify-start items-center break-keep'>
                                <div className='box1-text w-1/2 pretendard-B pl-24 whitespace-nowrap'>
                                    <p className='box1-title text-7xl text-white'>
                                        [PIU]<br />
                                        그립톡 굿즈
                                    </p>
                                    <p className='box1-sub text-3xl text-white mt-10'>"세번째 화면입니다."</p>
                                </div>
                                    <div className="box1-img w-1/2 flex min-h-screen max-h-screen">
                                        <img src={images.buyb_img1} alt="패키지 이미지" className="pt-28 pl-28"/>
                                    </div>
                                </div>
                        </div>
                    <div className="container2 mx-auto">
                        <div className="w-full flex min-h-screen max-h-screen bg-rose-100">
                            <div className='box2 flex justify-start items-center break-keep'>
                                <div className='box2-text w-1/2 pretendard-B pl-24 whitespace-nowrap mb-10'>
                                <p className="box2-title text-7xl mb-16">a.<br/><br/>
                                    L I K A L I K A</p>
                                    <p className='box2-sub text-3xl mt-5'>자체 제작을 통해 보장된 품질과 퀄리티</p>
                                </div>
                            <div className="box2-img w-1/2 flex min-h-screen max-h-screen">
                                <img src={images.buyb_img2} alt="패키지 이미지" className="pt-28 px-14"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container3 mx-auto">
                        <div className="w-full flex min-h-screen max-h-screen bg-[#FFF3E4]">
                        <div className='box3 flex justify-start items-center break-keep'>
                            <div className="box3-img w-1/2 flex min-h-screen max-h-screen">
                                        <img src={images.buyb_img3} alt="패키지 이미지" className="p-14"/>
                                        </div>
                            <div className="box3-text w-1/2 pretendard-B pl-24 whitespace-nowrap ">
                                    <p className="box3-title text-7xl font-black mb-16 mr-16">상세정보 설명</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BuyBottom;