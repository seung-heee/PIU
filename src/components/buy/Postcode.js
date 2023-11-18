import React from 'react';
import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const Postcode = () => {
    const open = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

    const [zipCode, setZipcode] = useState("");
    const [fullAddress, setFullAddress] = useState("");
    const [extraAddress, setExtraAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState(""); // 새로운 상태 추가


    const handleComplete = (data) => {
        setFullAddress(data.address);
        setZipcode(data.zonecode);
        setExtraAddress('');

        if (data.addressType === 'R') {
            let updatedExtraAddress = '';
            if (data.bname !== '') {
                updatedExtraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                updatedExtraAddress += updatedExtraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            setExtraAddress(updatedExtraAddress);
            setFullAddress(updatedExtraAddress !== '' ? `${data.roadAddress} (${updatedExtraAddress})` : data.roadAddress);
        }

        console.log(fullAddress);
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <>
            <div className='grow flex flex-col'>
                <div className='flex grow items-center justify-between'>
                    <input type="text" placeholder="우편번호" value={zipCode} readOnly />
                    <button type='button' onClick={handleClick} className='addressbtn'>주소 검색</button>
                </div>
                <div className='flex flex-col items-start grow '>
                    <input type="text" placeholder='주소' value={fullAddress} readOnly />
                    <input type="text" placeholder='상세주소' value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} />
                </div>
            </div>
        </>
    );
};

export default Postcode;