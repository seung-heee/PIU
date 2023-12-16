import { Link } from "react-router-dom";
import { images } from "../utils/images";

const ShowNav = () => {
    return (
        <div className="ShowNav">
            <ul className="min-h-screen flex flex-col items-center justify-center gap-y-6 text-3xl">
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="#">패키지 구매</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="#">주문 | 배송 조회</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="https://www.spatial.io/s/PIU-654bc9ef10ee2f1f26714032?share=3274268876320783038">
                    <img src={images.RunningPIUApp} alt="" className='w-60' /></Link></li>
                {/* <li className="hover:textShadow duration-500 hover:translate-y-[-5px] RunningPIU"><Link to="#">Running PIU App</Link></li> */}
                {/* <li className="mb-20 hover:textShadow duration-500 hover:translate-y-[-5px]"></li> */}
            </ul>
        </div>
    )
}

export default ShowNav;