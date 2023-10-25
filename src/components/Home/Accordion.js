import '../../css/Accordion.css';

const Accordion = ({ level, selected, setSelected, showText, setShowText }) => {
    const handleActive = (index) => {
        setSelected(index);
        setShowText(true);
    };

    return (
        <div className={`slideItem slideItem${level} ${selected === level ? "active grow" : ""}`} onClick={() => { handleActive(level) }}>
            {showText &&
                <>
                    <div>
                        <p className='AccordionTitle pretendard-EB text-focus-in'>
                            “가상 동반자를 현실로”<br /> : 유기견 입양 캠페인
                        </p>
                        <p className='AccordionSub pretendard-R text-focus-in'>
                            부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부재 캠페인 목적부
                            재 캠페인 목적부재
                        </p>
                    </div>
                </>}
        </div>
    )
}

export default Accordion;