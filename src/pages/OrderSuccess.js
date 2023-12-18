import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
import { images } from "../utils/images";
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {
    const location = useLocation();
    const { state } = location;
    const formData = state?.formData || {};
    // const updatedFormData = state?.updatedFormData || {};

    return (
        <>
            <Nav />
            <div className="Order">
                <div className="container mx-auto">
                    <div className="text-center">
                        <div className="OrderSuccessTitle text-4xl mb-3 ">주문이 성공적으로 <span className="font-bold">완료</span>되었습니다.</div>
                        <div className="OrderSuccessSub mb-1 flex justify-center items-end">
                            <div className="text-start">
                                <p>주문하신 상품의 결제가 성공적으로 완료되었습니다.</p>
                                <p> 주문 상태는 카카오톡 플러스 친구를 통해 문의하실 있습니다.</p>
                            </div>
                            <div className="ml-10">
                                카카오톡 문의하기
                            </div>
                        </div>
                        <div className="text-green-500 orderSuccess_number">주문번호 : {formData.order_code}</div>
                        <div className="OrderInfoBox p-5 bg-zinc-200 w-1/2 mx-auto rounded-xl m-3">
                            <div className="text-xl font-bold">주문정보</div>
                            <div>
                                <p>{formData.cust_name} / {formData.phone_number} / {formData.email}</p>
                                <p>{formData.address.fullAddress} {formData.address.detailAddress}</p>
                            </div>
                        </div>
                    </div>

                    <div className="OrderSuccessbox w-2/3 mx-auto border m-10 p-5">
                        <div className="px-10 py-5">
                            <div className="text-2xl mb-3">주문상품</div>
                            <div className="flex items-center">
                                <img src={images.buy1} alt="" className="w-20 mr-3" />
                                <div className="">
                                    <p className="text-blue-800 font-bold">10/18(수) 이내 발송</p>
                                    <p>패키지명</p>
                                    <p>상세정보</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 py-5 OrderSuccessInfo">
                            <div className="text-2xl">입금정보</div>
                            <div className="bg-zinc-200 p-3 px-6 rounded-xl w-1/2 my-5">
                                <p>{formData.expired_date}까지 입금해주세요</p>
                                <p className="text-xs">입금 확인이 안될 시 주문이 취소됩니다.</p>
                            </div>
                            <div className="p-3 w-1/2">
                                <p className="w-full flex mb-2">
                                    <p className="w-4/12">입금금액</p>
                                    <p className="w-8/12">15,000원</p>
                                </p>
                                <p className="w-full flex mb-2">
                                    <p className="w-4/12">예금주</p>
                                    <p className="w-8/12">편진범</p>
                                </p>
                                <p className="w-full flex">
                                    <p className="w-4/12">입금은행</p>
                                    <p className="w-8/12">국민은행 000000000000</p>
                                </p>
                            </div>
                        </div>
                        <div className="text-2xl mb-3 px-10 py-5">결제금액 : 11,111원</div>

                        <div className="my-8 px-10 py-5">
                            <p className="text-red-500">* 주문(결제) 페이지에 나오는 '주문번호'를 반드시 메모해두시기 바랍니다.</p>
                            주문번호를 실수로 적어두지 않고 창을 닫으셨다면, 카카오톡 문의로 문의 주시면 확인 가능합니다.<br />
                            고객센터 상담 시간은 평일 오전 10시~오후 6시 이므로 시간 참고하시어 문의주시기 바랍니다.<br />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </>
    )
}

export default OrderSuccess;