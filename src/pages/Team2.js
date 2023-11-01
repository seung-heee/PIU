import '../css/About.css';
import Person from '../components/about/Person';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import PersonInfo from '../utils/PersonInfo.json';
import ScrollToTop from '../components/ScrollToTop';

const Team2 = () => {
    const scrollToBottom = () => {
        const element = document.getElementById('bottom'); // 'bottom'이라는 id를 가진 요소를 찾습니다.
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // 해당 요소로 스크롤하고 부드럽게 애니메이션화합니다.
        }
    };


    return (
        <div className="Team min-h-screen slide-in-right">
            <Link to='/#' onClick={scrollToBottom}>
                <PiArrowUDownLeftBold className='text-3xl absolute top-8 left-8' />
            </Link>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className='flex flex-col justify-end items-center'>
                    <div className='pretendard-EB text-4xl text-center my-10'>PIU TEAM</div>
                    <div className='people grid grid-cols-7'>
                        {PersonInfo.map((person) => {
                            return (
                                <><Person id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Team2;