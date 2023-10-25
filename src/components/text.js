import { useState } from 'react';
import '../../css/Home.css';
const Main = () => {
    const [selectedElement, setSelectedElement] = useState(0);
    const [showText, setShowText] = useState(false);

    const handleActive = (index) => {
        setSelectedElement(index);
        setShowText(true);
    };

    return (
        <div>
            <div className="slideBox flex justify-center items-center mx-auto">
                <div className={`slideItem slideItem0 ${selectedElement === 0 ? "active grow" : ""}`} onClick={() => { handleActive(0) }}>
                    {showText &&
                        <>
                            <div>
                                <p className='pretendard-EB text-focus-in'>
                                    “가상 동반자를 현실로”<br /> : 유기견 입양 캠페인
                                </p>
                                <p className='pretendard-B text-focus-in'>
                                    부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부
                                    재 캠페인 목적부재
                                </p>
                            </div>
                        </>}
                </div>
                <div className={`slideItem slideItem1 ${selectedElement === 1 ? "active grow" : ""}`} onClick={() => { handleActive(1) }}>
                    {showText && <>
                        <div>
                            <p className='text-focus-in'>
                                “가상 동반자를 현실로”<br /> : 유기견 입양 캠페인
                            </p>
                            <p className='text-focus-in'>
                                부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부
                                재 캠페인 목적부재
                            </p>
                        </div>
                    </>}
                </div>
                <div className={`slideItem slideItem2 ${selectedElement === 2 ? "active grow" : ""}`} onClick={() => { handleActive(2) }}>
                    {showText && <>
                        <div>
                            <p className='text-focus-in'>
                                “가상 동반자를 현실로”<br /> : 유기견 입양 캠페인
                            </p>
                            <p className='text-focus-in'>
                                부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부
                                재 캠페인 목적부재
                            </p>
                        </div>
                    </>}
                </div>
                <div className={`slideItem slideItem3 ${selectedElement === 3 ? "active grow" : ""}`} onClick={() => { handleActive(3) }}>
                    {showText && <>
                        <div>
                            <p className='text-focus-in'>
                                “가상 동반자를 현실로”<br /> : 유기견 입양 캠페인
                            </p>
                            <p className='text-focus-in'>
                                부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부
                                재 캠페인 목적부재
                            </p>
                        </div>
                    </>}
                </div>
            </div>
        </div>

    )
}

export default Main;