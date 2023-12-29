import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
import { images } from "../utils/images";

const OrderDetail = () => {
    const location = useLocation();
    const { state } = location;
    const formData = state?.nonmemberData || {};


    return (
        <>
            <Nav />
            <div className="Order">
                <div className="container mx-auto">
                    <div className="text-center">
                        <div className="OrderDetailTitle text-4xl mb-3">주문상세</div>
                        <div>주문번호 : {formData.order_code}</div>
                        <div>주문날짜 : {formData.create_date}</div>
                    </div>

                    <div className="OrderDetailbox w-2/3 mx-auto border m-10 p-5">
                        <div className="px-10 py-5">
                            <div className="text-2xl mb-3">주문상품</div>
                            <div className="flex items-center">
                                <img src={images.tok} alt="" className="w-20 mr-3" />
                                <div className="">
                                    {/* <p className="text-blue-800 font-bold">10/18(수) 이내 발송</p> */}
                                    <p>유기견 입양증진 캠페인 PIU <br />사랑멍톡 굿즈 세트</p>
                                </div>
                            </div>
                        </div>
                        <div className="OrderDetailInfo px-10 py-5">
                            <div className="text-2xl">입금정보</div>
                            {/* 조건부렌더링 */}
                            {formData.orderstatus === "주문 접수" ?
                                <div className="bg-zinc-200 p-3 px-6 rounded-xl w-1/2 my-5">
                                    <p>주문접수 - <span className="text-red-500 font-bold">결제 미완료</span></p>
                                    <p className="text-xs">{formData.expired_date}까지 입금해주세요</p>
                                </div>

                                :
                                <div className="bg-zinc-200 p-3 px-6 rounded-xl w-1/2 my-5">
                                    <p>주문접수 - <span className="text-green-600 font-bold">결제 완료</span></p>
                                </div>
                            }
                            <div className="OrderDetailInfo p-3 w-1/2">
                                <p className="w-full flex mb-2">
                                    <p className="w-4/12 text-neutral-400">주문자</p>
                                    <p className="w-8/12 Atextright">{formData.cust_name}</p>
                                </p>
                                <p className="w-full flex mb-2">
                                    <p className="w-4/12 text-neutral-400">연락처</p>
                                    <p className="w-8/12 Atextright">{formData.phone_number}</p>
                                </p>
                                <p className="w-full flex">
                                    <p className="w-4/12 text-neutral-400">이메일</p>
                                    <p className="w-8/12 Atextright">{formData.email}</p>
                                </p>
                            </div>
                        </div>
                        <div className="OrderDetailInfo px-10 py-5">
                            <div className="text-2xl">결제 정보</div>
                            <div className="p-3 w-1/2">
                                <p className="w-full flex mb-2">
                                    <p className="w-4/12 text-neutral-400">결제 방법</p>
                                    <p className="w-8/12 Atextright">무통장입금</p>
                                </p>
                                <p className="w-full flex mb-2">
                                    <p className="w-4/12 text-neutral-400">총 상품금액</p>
                                    <p className="w-8/12 Atextright">{formData.product_price}</p>
                                </p>
                                <p className="w-full flex">
                                    <p className="w-4/12 text-neutral-400">배송비</p>
                                    <p className="w-8/12 Atextright">무료</p>
                                </p>
                            </div>
                        </div>
                        <div className="OrderDetailInfo px-10 py-5">
                            <div className="text-2xl">배송지 정보</div>
                            <div className="p-3 w-2/3">

                                <p className="w-full flex mb-2">
                                    <p className="w-3/12 text-neutral-400">주소</p>
                                    <p className="w-9/12 Atextright">
                                        {formData.address.fullAddress}
                                        {formData.address.detailAddress}
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </>
    )
}

export default OrderDetail;