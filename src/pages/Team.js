import { images } from '../utils/images'
import '../css/About.css';
import Person from '../components/about/Person';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Team = () => {
    return (
        <div className="Team min-h-screen">
            <Link to='#'>
                <PiArrowUDownLeftBold className='text-3xl absolute top-8 left-8' />
            </Link>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className='flex justify-end items-center w-10/12'>
                    <div className='pretendard-EB text-5xl w-1/4 text-center'>METAVERSE</div>
                    <div className='people flex grow justify-center w-3/4'>
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                    </div>
                </div>
                <div className='flex justify-center items-center w-10/12'>
                    <div className='pretendard-EB text-5xl w-1/4 text-center'>3D MODELING</div>
                    <div className='people flex grow justify-center w-3/4'>
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                    </div>
                </div>
                <div className='flex justify-center items-center w-10/12'>
                    <div className='pretendard-EB text-5xl w-1/4 text-center'>WEB</div>
                    <div className='people flex grow justify-center w-3/4'>
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;