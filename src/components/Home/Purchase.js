import '../../css/Purchase.css';
import { images } from '../../utils/images';

const Purchase = () => {
    return (
        <div className="section min-h-screen">
            <div className='gift flex justify-center items-center w-full p-8 pt-20'>
                <div className=' mt-10'>
                    <p className="Aboutgift pretendard-B pb-10">
                    당신께 유기견 보호를 향한<br />
                    노력에 감사를 표하는<br />
                    PIU 팀 굿즈를 선물합니다.</p>
                    <p className='Aboutgiftcontent'>
                    이번 캠페인을 통해 정기 후원을 시작하신 분들께는 <br />
                    PIU 팀의 고마움을 담아 PIU 팀 굿즈를 선물로 드립니다.<br />
                    유기견 보호에 함께해주셔서 진심으로 감사드립니다.
                    </p>
                </div>
                    <img src={images.tok} alt="그립톡" className="giftimg w-1/4 ml-4" />
                </div>
                <div className='button1 flex justify-center items-center w-full'>
                <button type='button' className="py-5 px-9 text-xl font-semibold rounded-lg shadow-md text-white bg-slate-800 hover:bg-white hover:text-slate-800">
                        정기후원하고 굿즈받기
                    </button>
                </div>
        </div>
    )
}

export default Purchase;