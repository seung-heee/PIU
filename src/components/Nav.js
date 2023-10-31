import { Link } from 'react-router-dom';
import '../css/Nav.css';
import { images } from '../utils/images';

const Nav = () => {
    return (
        <div className="Nav mb-3 flex justify-center pretendard-B text-lg">
            <ul className='container flex justify-between items-center h-full '>
                {/* <li><img src={images.Logo} alt="Logo" className='w-10' /></li> */}
                <li className='text-4xl'><div>PIU</div></li>
                <div className='flex items-center'>
                    <li className='mx-3'><Link to='#'> 패키지 구매</Link></li>
                    <li className='mx-3'><Link to='#'> 주문 | 배송 조회</Link></li>
                    <li className='mx-3'><Link to='#'> 후원하기</Link></li>
                    <li className='RunningPIU mx-3'><Link to='#'> Running PIU App</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Nav;