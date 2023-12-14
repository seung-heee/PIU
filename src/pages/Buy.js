import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import BuyBottom from "../components/buy/BuyBottom";
import BuyBottom2 from "../components/buy/BuyBottom2";
import BuyBottom3 from "../components/buy/BuyBottom3";
import { images } from '../utils/images';
import React, { useEffect, useState } from "react";
import { APIClient } from "../utils/Auth";
import { useLocation } from "react-router-dom";


const Buy = () => {

    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const baseUrl = "http://localhost:3000";
    /*const baseUrl="https://www.petinuniverse.com";*/

    const handleCopyClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("링크 주소가 복사되었어요.");
        } catch (err) {
            console.log(err);
        }
    };

    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
      };

    const MoveToTop = () => {
        // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };

    const product = {
            price: 10000,
            stock: 5
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
        const handleSubmit = () =>{
            const products ={
                quantity,
                total
            }
            navigate('/order', { state: { products } });
        }
    return (
        <>
            <Nav />
            <div className="Buy">
                <div className="container mx-auto">
                    <div className="buy-box w-full flex">
                        <div className="buy-img w-1/2"><img src={images.buy1} alt="패키지 이미지" className="p-8 ml-8" /></div>
                        <div className="buy-content w-1/2 p-16 pt-16 pr-24 mt-20">
                            <p className="buy-title text-xl mb-5 font-medium">☆코스튬 기획전☆ [도그웨그] 공작새<br/>
                                강아지 코스튬 고양이 할로윈 코스프레 옷 <br/> [오프라인전용]</p>
                            <div>
                                <form className="flex flex-col mr-3 pr-5">
                                <div className="w-full flex my-5 mb-10">
                                <p className="w-1/2 text-xl px-2 font-medium justify-start ml-3">수량</p>
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
                                    </form>
                                    </div>
                                    <div className="mb-6 w-full flex">
                                        <hr/>
                                        <p className="w-3/4 text-2xl px-2 font-semibold">총 상품 금액</p>
                                        <strong className="w-full flex justify-end mr-3 text-xl">{total.toLocaleString()}</strong>
                                    </div>
                                    <hr/>
                                    <div className="w-full flex">
                                    <input type="submit" value="구매하기" className="my-5 ml-10 p-4 bg-black w-3/5 text-white rounded-xl text-xl font-semibold" />

                                    <button url="" className="ml-10" onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    </div>
                            </div>
                        </div>
                    <button type="submit" onClick={handleSubmit}>
                        구매 임시버튼
                    </button>
                    <div>
                        <div className="w-full text-center flex justify-center">
                            <button className="w-1/3" onClick={() => handleButtonClick(1)}>Button 1</button>
                            <button className="w-1/3" onClick={() => handleButtonClick(2)}>Button 2</button>
                            <button className="w-1/3" onClick={() => handleButtonClick(3)}>Button 3</button>
                        </div>

                        <div>
                            {selectedButton === 1 && <BuyBottom />}
                            {selectedButton === 2 && <BuyBottom2 />}
                            {selectedButton === 3 && <BuyBottom3 />}
                        </div>
                        <button className="flex justify-end right-20 bottom-20 absolute" onClick={MoveToTop}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buy;