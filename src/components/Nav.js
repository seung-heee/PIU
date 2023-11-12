import { Link } from 'react-router-dom';
import { images } from '../utils/images';
import { useEffect, useState } from 'react';
import ShowNav from "./ShowNav";
import '../css/Nav.css';
import '../css/media.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false); // 스크롤 상태를 추적하기 위한 상태 변수
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        // 화면 크기 변경 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);
        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Navbar의 클래스 이름을 동적으로 설정하고 scrolling 상태에 따라 배경색 클래스를 추가
    const navbg = `Nav fixed top-0 flex justify-between items-center px-5 py-3 ${isOpen ? 'z-40' : 'z-30'} ${scrolling ? 'nav-bg-scrolled' : ''}`;

    return (
        <div className="Nav mb-3 flex justify-center pretendard-B text-lg">
            <ul className='container flex justify-between items-center h-full '>
                {/* <li><Link to='/'><img src={images.PIU} alt="logo" className='w-20' /></Link></li> */}
                <li className='text-4xl'><div>PIU</div></li>
                {windowWidth >= 768 ?
                    <>
                        {/* PC */}
                        <div className='flex items-center navVersion'>
                            <li className='mx-3'><Link to='/buy'> 패키지 구매</Link></li>
                            <li className='mx-3'><Link to='/nonmemberLogin'> 주문 | 배송 조회</Link></li>
                            <li className='mx-3'><Link to='#'> 후원하기</Link></li>
                            <li className='RunningPIU mx-3'><Link to='#'> Running PIU App</Link></li>
                        </div>
                    </> :
                    <>
                        {/* 모바일 */}
                        <div className={`off-screen-menu ${isOpen ? 'open fixed slideInDown' : 'hidden'} flex justify-center items-center tracking-[1px]`}>
                            {isOpen && (
                                <ShowNav />
                            )}
                        </div>
                        <div className={`mr-1 hamburger-menu ${isOpen ? 'active' : ''} cursor-pointer z-20 navVersion`} onClick={() => setIsOpen(!isOpen)}>
                            <div className="ham-bar bar-top menugreen"></div>
                            <div className="ham-bar bar-mid menugreen"></div>
                            <div className="ham-bar bar-bottom menugreen"></div>
                        </div>
                    </>}
            </ul >
        </div >
    )
}

export default Nav;