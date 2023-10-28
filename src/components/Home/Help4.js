import { useState } from 'react';
import '../../css/Home.css';
import { images } from '../../utils/images';
const Help4 = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="help4">
            <div className="help4Box grid grid-cols-2 min-h-screen container mx-auto text-white text-3xl pretendard-B">
                <div className="flex justify-center items-center gridItem grid1">
                    <p className='invisible mx-10 break-keep'>PIU는 실제 유기되어 안락사를 기다리는
                        반려견들로 패션쇼를 진행합니다.</p>
                </div>
                <div className="flex  justify-center items-center gridItem grid2 ">
                    <p className='invisible mx-10 break-keep'>PIU는 실제 유기되어 안락사를 기다리는
                        반려견들로 패션쇼를 진행합니다.</p>
                </div>
                <div className="flex  justify-center items-center gridItem grid3 ">
                    <p className='invisible mx-10 break-keep'>PIU는 실제 유기되어 안락사를 기다리는
                        반려견들로 패션쇼를 진행합니다.</p>
                </div>
                <div className="flex  justify-center items-center gridItem grid4 ">
                    <p className='invisible mx-10 break-keep'>PIU는 실제 유기되어 안락사를 기다리는
                        반려견들로 패션쇼를 진행합니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Help4;