import React, { useState } from "react";
import Nav from "../components/Nav";
import '../css/Order.css';
import PersonalInformationAgree from "../components/buy/PersonalInformationAgree";
import Postcode from "../components/buy/Postcode";
import ProductInfo from "../components/buy/ProductInfo";
import { APIClient } from "../utils/Auth";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { useRef } from "react";

const Order = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("무통장입금"); // 결제 방식
    const [depositorName, setDepositorName] = useState(""); // 입금자명
    const [depositorybank, setDepositorybank] = useState(""); // 입금은행
    const [agree, setAgree] = useState(""); // 동의여부
    const [address, setAddress] = useState({
        zipCode: '',
        fullAddress: '',
        detailAddress: ''
    });
    const [productInfo, setProductInfo] = useState("브랜드A"); // 아마이것도 객체일가능성높음

    // 오류메세지 상태 저장
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");

    // 유효성 검사
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    // useRef를 사용하여 각 입력 필드에 대한 참조 생성
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const confirmPasswordInputRef = useRef(null);

    const onChangeEmail = (e) => {
        e.preventDefault();
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
            /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false);
        } else {
            setEmailMessage("사용 가능한 이메일 입니다.");
            setIsEmail(true);
        }
    };

    const onChangePassword = (e) => {
        e.preventDefault();
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPassword)) {
            setPasswordMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPassword(false);
        } else {
            setPasswordMessage("안전한 비밀번호 입니다.");
            setIsPassword(true);
        }
    };

    const onChangePasswordConfirm = (e) => {
        e.preventDefault();
        const currentPasswordConfirm = e.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        if (password !== currentPasswordConfirm) {
            setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
            setIsPasswordConfirm(false);
        } else {
            setPasswordConfirmMessage("비밀번호가 일치합니다.");
            setIsPasswordConfirm(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!isEmail) {
            emailInputRef.current.focus();
            return;
        }

        if (!isPassword) {
            passwordInputRef.current.focus();
            return;
        }

        if (!isPasswordConfirm) {
            confirmPasswordInputRef.current.focus();
            return;
        }

        const formData = {
            "cust_name": name,
            "email": email,
            "phone_number": phoneNumber,
            "cust_pwd": passwordConfirm,
            "address": address,
            "product_info": productInfo,
            "agree": agree,
            "depositor_name": depositorName,
        }

        // try {
        //     const response = await APIClient().post('/orders/', formData);
        //     if (response.data) {

        //         const updatedFormData = {
        //             ...formData,
        //             responseData: response.data,
        //         }; // 서버에서 받은 데이터 추가

        //         navigate('/orderSuccess', { state: { updatedFormData } });
        //     } else {
        //         throw new Error(`오류 : ${response.status}`);
        //     }
        // } catch (error) {
        //     console.error(error);
        // }

        navigate('/orderSuccess', { state: { formData } });
    }

    return (
        <>
            <Nav />
            <div className="Order">
                <div className="container mx-auto">
                    <div className="Ordertitle_Order text-4xl mb-10 text-center">ORDER</div>

                    <div className="OrderFormBox">
                        <form action="" className="flex flex-col w-2/3 mx-auto" onSubmit={handleSubmit}>
                            {/* 주문자 정보 */}
                            <div className="mb-10 border p-10">
                                <p className="text-2xl mb-5">주문자정보</p>
                                <div className="mb-3 flex w-full">
                                    <label htmlFor="name" className="flex w-6/12">이름</label>
                                    <input type="text w-8/12" id="name" className="Order_inputItem grow" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-3 flex w-full">
                                    <label htmlFor='email' className="flex w-6/12">이메일</label>
                                    <div className="grow flex flex-col">
                                        <input ref={emailInputRef} type="email" id='email' className="Order_inputItem grow" value={email} onChange={onChangeEmail} />
                                        <p className="message">{emailMessage}</p>
                                    </div>
                                </div>
                                <div className="mb-3 flex w-full">
                                    <label htmlFor='phoneNumber' className="flex w-6/12 text-right">전화번호</label>
                                    <input type="text" id='phoneNumber' className="Order_inputItem grow" placeholder="010-0000-0000" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                            </div>

                            {/* 배송 정보 */}
                            <div className="mb-10 border p-10">
                                <p className="text-2xl mb-5">배송 정보</p>
                                <div className="mb-3 flex w-full">
                                    <label htmlFor='password' className="flex w-6/12">주문조회 비밀번호</label>
                                    <div className="grow flex flex-col">
                                        <input ref={passwordInputRef} type="password" id='password' className="Order_inputItem grow" value={password} onChange={onChangePassword} />
                                        <p className="message">{passwordMessage}</p>
                                    </div>
                                </div>
                                <div className="mb-3 flex w-full">
                                    <label htmlFor='passwordConfirm' className="flex w-6/12">주문조회 비밀번호 확인</label>
                                    <div className="grow flex flex-col">
                                        <input ref={confirmPasswordInputRef} type="password" id='passwordConfirm' className="Order_inputItem grow" value={passwordConfirm} onChange={onChangePasswordConfirm} />
                                        <p className="message">{passwordConfirmMessage}</p>
                                    </div>
                                </div>
                                <div className="mb-3 flex w-full">
                                    <label htmlFor='' className="flex w-6/12 text-right">배송지</label>
                                    <Postcode address={address} setAddress={setAddress} />
                                </div>
                            </div>

                            {/* 상품 정보 */}
                            <div className="mb-10 border p-10">
                                <p className="text-2xl mb-5">상품 정보</p>
                                <ProductInfo />
                            </div>

                            {/* 결제정보 */}
                            <div className="mb-10 border p-10">
                                <p className="text-2xl mb-5">결제 정보</p>
                                <label className="mb-3 flex w-full">
                                    <span className="flex w-6/12">결제안내</span>
                                    <div className=" flex items-center">
                                        <input type="radio" name="fav" id="무통장입금" className="Order_inputItem grow mr-2" value={paymentMethod} />
                                        <label htmlFor="무통장입금">무통장입금</label>
                                    </div>
                                </label>
                                <label className="mb-3 flex w-full">
                                    <span className="flex w-6/12">입금자명</span>
                                    <input type="text" className="Order_inputItem grow" value={depositorName} onChange={(e) => setDepositorName(e.target.value)} />
                                </label>
                                <label className="mb-3 flex w-full">
                                    <span className="flex w-6/12 text-right">입금은행</span>
                                    <select name="Bank" className="flex w-6/12" value={depositorybank} onChange={(e) => setDepositorybank(e.target.value)}>
                                        <option value="국민은행">국민은행</option>
                                        <option value="우리은행">우리은행</option>
                                        <option value="카카오뱅크">카카오뱅크</option>
                                    </select>
                                </label>
                            </div>

                            <PersonalInformationAgree agree={agree} setAgree={setAgree} />
                            {/* <input type="submit" value="구매하기" className="Buybtn cursor-pointer" /> */}
                            <button type="submit" onClick={handleSubmit}>
                                구매하기
                            </button>
                            <Link to='/Ordersuccess'>주문완료 임시링크</Link>
                        </form>
                    </div>
                </div>
            </div >
            <ScrollToTop />
        </>
    )
}

export default Order;