import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import BuyBottom from "../components/buy/BuyBottom";
import { images } from '../utils/images';
import React, { useEffect, useState } from "react";

    
const Buy = () => {

    const product = {
        price: 10000,
        stock: 50
    };

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(product.price);

    const handleClickCounter = (num) => {
        setQuantity((prev) => prev + num);
        setTotal((prev) => prev + product.price * num);
    };

    const handleBlurInput = () => {
        if (quantity > product.stock) {
            alert(`${product.stock}개 이하로 구매하실 수 있습니다.`);
            setQuantity(product.stock);
            setTotal(product.price * product.stock);
        }
    };
    return (
        <>
            <Nav />
            <div className="Buy">
                <div className="container mx-auto">
                    <div className="buy-box w-full flex">
                        <div className="buy-img w-1/2"><img src={images.buy1} alt="패키지 이미지" className="p-8 ml-8" /></div>
                        <div className="buy-content w-1/2 p-16 pt-24 pr-24">
                            <p className="buy-title text-xl mb-5 font-medium">☆코스튬 기획전☆ [도그웨그] 공작새<br/>
                                강아지 코스튬 고양이 할로윈 코스프레 옷 <br/> [오프라인전용]</p>
                            <div>
                                <form className="flex flex-col mr-3 pr-5">
                                    <select name="Brand" className="h-12 my-4 p-3 outline outline-1 rounded-md">
                                        <option value="브랜드A" selected="selected">브랜드A</option>
                                        <option value="브랜드B">브랜드B</option>
                                        <option value="브랜드C">브랜드C</option>
                                    </select>
                                    <select name="Size" className="h-12 mb-6 p-3 outline outline-1 rounded-md">
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                    <output name="result" for="a b"></output>
                                    <div className="mb-6 w-full flex">
                                        <p className="w-1/2 text-xl px-2 font-medium">수량</p>
                                        <div className="counter w-full flex justify-end mr-3">
                                            <button className="bg-slate-200 w-7"
                                                type="button"
                                                disabled={quantity === 1}
                                                aria-label="수량 내리기"
                                                onClick={() => handleClickCounter(-1)}
                                            >
                                                -
                                            </button>
                                            <label className="text-center justify-center">
                                                <input className="w-8 text-center" 
                                                type="number"
                                                min={1}
                                                value={quantity}
                                                max={product.stock}
                                                readOnly
                                                onBlur={handleBlurInput}
                                                />
                                            </label>
                                            <button className="bg-slate-200 w-7 mr-4"
                                                type="button"
                                                disabled={quantity === product.stock}
                                                aria-label="수량 올리기"
                                                onClick={() => handleClickCounter(1)}
                                            >
                                                +
                                            </button>
                                            <p className="text-xl">{product.price}</p>
                                        </div>
                                    </div>
                                    <div className="mb-6 w-full flex">
                                        <p className="w-3/4 text-2xl px-2 font-semibold">총 상품 금액</p>
                                        <strong className="w-full flex justify-end mr-3 text-xl">{total.toLocaleString()}</strong>
                                    </div>
                                    <hr/>
                                    <div className="w-full flex">
                                    <input type="submit" value="구매하기" className="my-5 ml-5 p-4 bg-black w-3/5 text-white rounded-xl text-xl font-semibold" />
                                    <button url="" className="ml-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button url="" className="ml-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    </div>
                                    <div className="buy-sub px-10">
                                        <p className="text-right">누적 판매 1000+
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Link to='/order'>구매하기 임시링크</Link>
                    <BuyBottom />

                </div>
            </div>
        </>
    )
}
export default Buy;