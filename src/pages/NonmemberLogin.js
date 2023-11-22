import { useState } from "react";
import Nav from "../components/Nav";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { APIClient } from "../utils/Auth";
import { Link, useNavigate } from "react-router-dom";

const NonmemberLogin = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        memberName: '',
        orderNumber: '',
        orderPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            "memberName": values.memberName,
            "orderNumber": values.orderNumber,
            "orderPassword ": values.orderPassword,
        }

        try {
            const response = await APIClient().post('/nonmemberCheck/', formData);
            if (response.data) {
                navigate('/주문상세페이지',);
            } else {
                throw new Error(`오류 : ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Nav />

            <div className="flex items-center justify-center">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <div className="text-5xl m-10 pretendard-EB">비회원로그인</div>
                    <div className="text-3xl m-8 pretendard-B">비회원의 경우, 주문시의 주문번호로 주문조회가 가능합니다.</div>
                    <div className="text-2xl w-6/12 mx-auto my-8">
                        <form action="" className="NonmemberLoginForm flex flex-col" onSubmit={HandleSubmit}>
                            <div className="mb-3">
                                <label className="flex">
                                    <span className="w-1/2 grow flex items-center"><MdOutlineKeyboardArrowRight />주문자명</span>
                                    <input type='string' className="w-1/2 inputItem" name='memberName' value={values.memberName} onChange={handleChange}></input>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="flex">
                                    <span className="w-1/2 grow flex items-center"><MdOutlineKeyboardArrowRight />주문번호</span>
                                    <input type='number' placeholder="하이픈(-) 포함" className="w-1/2 inputItem" name='orderNumber' value={values.orderNumber} onChange={handleChange}></input>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="flex">
                                    <span className="w-1/2 grow flex items-center"><MdOutlineKeyboardArrowRight />비회원주문 비밀번호</span>
                                    <input type='number' className="w-1/2 inputItem" name='orderPassword' value={values.orderPassword} onChange={handleChange}></input>
                                </label>
                            </div>
                            <button type="submit" className="p-4 mt-8 w-1/2 mx-auto rounded-xl bg-neutral-200">조회</button>
                        </form>
                    </div>
                    <Link to='/orderDetail'>주문상세 임시링크</Link>
                </div >
            </div >
        </>
    )
}

export default NonmemberLogin;