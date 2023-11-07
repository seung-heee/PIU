import { Link } from "react-router-dom";

const ShowNav = () => {
    return (
        <div className="ShowNav">
            <ul className="min-h-screen flex flex-col items-center justify-center gap-y-6 text-3xl">
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="buy">패키지 구매</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="#">주문 | 배송 조회</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="#">후원하기</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] RunningPIU"><Link to="#">Running PIU App</Link></li>
                <li className="mb-20 hover:textShadow duration-500 hover:translate-y-[-5px]"></li>
            </ul>
        </div>
    )
}

export default ShowNav;