import '../css/Nav.css';
import { images } from '../utils/images';

const Nav = () => {
    return (
        <div className="Nav mb-3 flex justify-center pretendard-B text-lg">
            <ul className='container flex justify-evenly items-center h-full '>
                <li><img src={images.Logo} alt="Logo" className='w-10' /></li>
                <li>캠페인 소개</li>
                <li>기업 소개</li>
                <li>메타버스 패션쇼 사진전 소개</li>
                <li>패키지 구매 & 기부</li>
                <li>주문 | 배송 조회</li>
                <li>후원</li>
                <li className='RunningPIU'>Running PIU App</li>
            </ul>
        </div >
    )
}

export default Nav;