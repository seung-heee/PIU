import { useState } from "react"

const PersonalInformationAgree = ({ agree, setAgree }) => {

    const handleClickRadioButton = (e) => {
        if (e.target.value === "Agree") {
            setAgree(true);
        } else {
            setAgree(false);
        }

    };
    return (
        <div>
            <div className="border p-5">
                <p>1. 개인정보 수집목적 및 이용목적 : 비회원 구매 서비스 제공</p>
                <p>2. 수집하는 개인정보 항목</p>
                <p>- 주문 시, 성명, 주소, 전화번호, 이메일, 결제정보, 비회원 결제 비밀번호</p>
                <p>- 취소/교환/반품 신청 시, 환불계좌정보(은행명, 계좌번호, 예금주)</p>
                <p>3. 개인정보의 보유기간 및 이용기간</p>
                <p>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
                <p>단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.</p>
                <p>가. 회사 내부 방침에 의한 정보 보유 사유· 부정거래 방지 및 쇼핑몰 운영방침에 따른 보관 : 5년</p>
                <p>나. 관련 법령에 의한 정보보유 사유</p>
                <p>o 계약 또는 청약철회 등에 관한 기록</p>
                <p>-보존이유 : 전자상거래등에서의소비자보호에관한법률</p>
                <p>-보존기간 : 5년</p>
                <p>o 대금 결제 및 재화 등의 공급에 관한 기록</p>
                <p>나. 관련 법령에 의한 정보보유 사유</p>
                <p>-보존기간 : 5년</p>
                <p>o 소비자 불만 또는 분쟁처리에 관한 기록</p>
                <p>-보존이유 : 전자상거래등에서의소비자보호에관한법률</p>
                <p>-보존기간 : 3년</p>
                <p>o 로그 기록</p>
                <p>-보존이유: 통신비밀보호법</p>
                <p>-보존기간 : 3개월</p>
                <p>※ 동의를 거부할 수 있으나 거부시 비회원 구매 서비스 이용이 불가능합니다.</p>

                <div className="AgreeBox flex items-center justify-end mt-5">
                    <div className="flex items-center justify-end mr-3">
                        <input
                            type="radio"
                            name="agreeForm"
                            id="Agree"
                            className="mr-2"
                            value="Agree"
                            checked={agree === true}
                            onChange={handleClickRadioButton}
                        />
                        <label htmlFor="Agree">개인정보 수집 및 이용에 동의함</label>
                    </div>
                    <div className="flex items-center justify-end">
                        <input
                            type="radio"
                            name="agreeForm"
                            id="disagree"
                            className="mr-2"
                            value="disagree"
                            checked={agree === false}
                            onChange={handleClickRadioButton}
                        />
                        <label htmlFor="disagree">동의하지 않음</label>
                    </div>
                </div>
            </div>

            <div className="my-8">
                <p className="text-red-500">* 주문(결제) 페이지에 나오는 '주문번호'를 반드시 메모해두시기 바랍니다.</p>
                주문번호를 실수로 적어두지 않고 창을 닫으셨다면, 카카오톡 문의로 문의 주시면 확인 가능합니다.<br />
                고객센터 상담 시간은 평일 오전 10시~오후 6시 이므로 시간 참고하시어 문의주시기 바랍니다.<br />
            </div>
        </div>
    )
}

export default PersonalInformationAgree