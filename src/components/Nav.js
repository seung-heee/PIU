import { Link } from 'react-router-dom';
import '../css/Nav.css';
import { images } from '../utils/images';

const Nav = () => {
    return (
        <div className="Nav mb-3 flex justify-center pretendard-B text-lg">
            <ul className='container flex justify-evenly items-center h-full '>
                <li><img src={images.Logo} alt="Logo" className='w-10' /></li>
                <li><Link to='#'> 캠페인 소개</Link></li>
                <li><Link to='#'> 기업 소개</Link></li>
                <li><Link to='#'> 메타버스 패션쇼 사진전 소개</Link></li>
                <li><Link to='#'> 패키지 구매 & 기부</Link></li>
                <li><Link to='#'> 주문 | 배송 조회</Link></li>
                <li><Link to='#About'> 후원</Link></li>
                <li className='RunningPIU'><Link to='#'> Running PIU App</Link></li>
            </ul>
        </div>
    )
}

export default Nav;