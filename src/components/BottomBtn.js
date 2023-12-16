import { Link } from "react-router-dom";

const BottomBtn = () => {
    return (
        <div className="BottomBtn fixed right-0 bottom-0">
            <div className="py-5 px-8 text-xl m-8 rounded-3xl">
                <Link to='#'>유기견 돕고 스마트톡 키트 받기</Link></div>
        </div>
    )
}

export default BottomBtn;