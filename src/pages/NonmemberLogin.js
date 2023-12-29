import { useState } from "react";
import Nav from "../components/Nav";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { APIClient } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

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
            "cust_name": values.memberName,
            "order_code": values.orderNumber,
            "cust_pwd": values.orderPassword,
        }

        try {
            const response = await APIClient().post('/orders/detail/', formData);
            if (response.data) {
                const nonmemberData = response.data
                navigate('/orderDetail', { state: { nonmemberData } });
            } else {
                throw new Error(`오류 : ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex flex-col h-screen">
                <Nav />

                <div className="grow flex items-center justify-center">
                    <div className="NonmemberLogin container mx-auto flex flex-col justify-center items-center">
                        <div className="NonmemberLoginTitle text-5xl m-10 pretendard-EB">비회원로그인</div>
                        <div className="NonmemberLoginSub text-3xl m-8 pretendard-B">주문시의 주문번호로 주문조회가 가능합니다.</div>
                        <div className="NonmemberLoginFormBox text-2xl w-6/12 mx-auto my-8">
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
                                        <input type='string' placeholder="하이픈(-) 포함" className="w-1/2 inputItem" name='orderNumber' value={values.orderNumber} onChange={handleChange}></input>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label className="flex">
                                        <span className="w-1/2 grow flex items-center"><MdOutlineKeyboardArrowRight />비회원주문 비밀번호</span>
                                        <input type='password' className="w-1/2 inputItem" name='orderPassword' value={values.orderPassword} onChange={handleChange}></input>
                                    </label>
                                </div>
                                <button type="submit" className="p-4 mt-8 w-1/2 mx-auto rounded-xl bg-neutral-200">조회</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NonmemberLogin;