import { images } from "../../utils/images";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";


const ProductInfo = () => {
    const location = useLocation();
    const { state } = location;
    const products = state?.products || {};

    return (
        <table className="ProductInfo w-full flex flex-col border p-3">
            <thead className="flex w-full">
                <tr className="flex w-full">
                    <th className="w-6/12 ">상품정보</th>
                    <th className="w-2/12">수량</th>
                    <th className="w-2/12">배송비</th>
                    <th className="w-2/12">주문금액</th>
                </tr>
            </thead>
            <tbody className="flex w-full">
                <tr className="flex w-full text-center items-center">
                    <td className="productBox w-6/12 flex">
                        <img src={images.productImg} alt="" className="w-20" />
                        <div className="flex flex-col justify-center grow text-left ml-5">
                            <p>유기견 입양증진 캠페인 사랑멍톡 굿즈 세트</p>
                        </div>
                    </td>
                    <td className="w-2/12">{products.quantity}</td>
                    <td className="w-2/12">무료</td>
                    <td className="w-2/12">{products.total}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductInfo;