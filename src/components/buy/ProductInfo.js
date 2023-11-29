import { images } from "../../utils/images";

const ProductInfo = () => {
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
                    <td className="w-6/12 flex">
                        <img src={images.buy1} alt="" className="w-20" />
                        <div className="flex flex-col justify-center grow text-left ml-5">
                            <p>[PIU] 브랜드명 - 상품명</p>
                            <p>옵션 : 사이즈 M</p>
                        </div>
                    </td>
                    <td className="w-2/12">1개</td>
                    <td className="w-2/12">무료</td>
                    <td className="w-2/12">15,000원</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductInfo;