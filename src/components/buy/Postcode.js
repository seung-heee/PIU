import React from 'react';
import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const Postcode = ({ address, setAddress }) => {
    const open = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

    const handleComplete = (data) => {
        setAddress((prevAddress) => ({
            ...prevAddress,
            zipCode: data.zonecode,
            fullAddress: data.address,
            extraAddress: '',
            detailAddress: ''
        }));
        console.log(address);

        if (data.addressType === 'R') {
            let updatedExtraAddress = '';
            if (data.bname !== '') {
                updatedExtraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                updatedExtraAddress += updatedExtraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }

            setAddress((prevAddress) => ({
                ...prevAddress,
                extraAddress: updatedExtraAddress,
                fullAddress: updatedExtraAddress !== '' ? `${data.roadAddress} (${updatedExtraAddress})` : data.roadAddress,
            }));
        }
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <>
            <div className='grow flex flex-col'>
                <div className='flex grow items-center justify-between'>
                    <input type="text" placeholder="우편번호" value={address.zipCode || ''} readOnly />
                    <button type='button' onClick={handleClick} className='addressbtn'>주소 검색</button>
                </div>
                <div className='flex flex-col items-start grow '>
                    <input type="text" className='w-full' placeholder='주소' value={address?.fullAddress || ''} readOnly />
                    <input type="text" className='w-full' placeholder='상세주소' value={address.detailAddress} onChange={(e) => {
                        console.log(address)
                        setAddress((prevAddress) => ({ ...prevAddress, detailAddress: e.target.value }))
                    }} />
                </div>
            </div>
        </>
    );
};

export default Postcode;