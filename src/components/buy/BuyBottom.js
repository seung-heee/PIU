import { images } from '../../utils/images';

const BuyBottom = () => {
    return (
        <div className="BuyBottom mt-10">
                <div className="container1 mx-auto">
                        <div className="w-full flex min-h-screen max-h-screen bg-green-300">
                            <div className="w-1/2 flex items-center justify-center ">
                            <p className="text-7xl font-black text-white mb-16">[PIU]<br/>
                                 <span className='mt-10'>그립톡 굿즈</span></p><br/>
                            <p className='text-white'>"세상에 단 하나뿐인 반려견 그립톡"</p>
                            </div>
                            
                            <div className="w-1/2 flex min-h-screen max-h-screen">
                                <img src={images.buyb_img1} alt="패키지 이미지" className="pt-28 pl-28"/>
                                </div>
                        </div>
                    </div>
                    <div className="container2 mx-auto">
                        <div className="w-full flex min-h-screen max-h-screen bg-rose-100">
                            <div className="w-1/2 flex items-center justify-center ">
                                <p className="text-7xl font-black mb-16">[PIU]<br/>
                                    <span className='mt-10'>그립톡 굿즈</span></p><br/>
                                <p className=''>"세상에 단 하나뿐인 반려견 그립톡"</p>
                                </div>
                                
                            <div className="w-1/2 flex min-h-screen max-h-screen">
                                <img src={images.buyb_img2} alt="패키지 이미지" className="pt-28 px-14"/>
                                </div>
                        </div>
                    </div>
                    <div className="container3 mx-auto">
                        <div className="w-full flex min-h-screen max-h-screen bg-pink-100">
                        <div className="w-1/2 flex min-h-screen max-h-screen">
                                    <img src={images.buyb_img3} alt="패키지 이미지" className="pt-28 px-14"/>
                                    </div>
                            <div className="w-1/2 flex items-center justify-center ">
                                    <p className="text-7xl font-black mb-16">[PIU]<br/>
                                        <span className='mt-10'>그립톡 굿즈</span></p><br/>
                                    <p className=''>"세상에 단 하나뿐인 반려견 그립톡"</p>
                                    </div>
                        </div>
                    </div>
                </div>
    )
}

export default BuyBottom;