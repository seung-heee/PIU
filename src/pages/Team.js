import { images } from '../utils/images'
import '../css/About.css';
import { useNavigate } from "react-router-dom";

const Team = () => {
    const navigate = useNavigate();

    return (
        <div className="Team min-h-screen ">
            <div className="p-12">
                <p>우리팀 소개 어ㅉㅓ고</p>
                <p className="pretendard-EB text-5xl">MEET OUR TEAM</p>
            </div>
            <div className="flex w-10/12 mx-auto items-center justify-center py-20">
                <div className='TeamItems px-3' onClick={() => { navigate('metaverse') }}>
                    <img src={images.company} alt="" className='inline-block h-8/12' />
                    <p className='text-center mt-2 text-2xl pretendard-B '>METAVERSE</p>
                </div>
                <div className='TeamItems px-3' onClick={() => { navigate('modeling') }}>
                    <img src={images.company} alt="" />
                    <p className='text-center mt-2 text-2xl pretendard-B '>3D MODELING</p>
                </div>
                <div className='TeamItems px-3' onClick={() => { navigate('web') }}>
                    <img src={images.company} alt="" />
                    <p className='text-center mt-2 text-2xl pretendard-B '>WEB</p>
                </div>
            </div>
        </div>
    )
}

export default Team;