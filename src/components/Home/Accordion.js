import '../../css/Accordion.css';

const Accordion = ({ level, selected, setSelected, showText, setShowText }) => {
    const handleActive = (index) => {
        setSelected(index);
        setShowText(true);
    };

    const Title = [
        <h3>"가상 동반자를 현실로” :<br /> 유기견 입양 캠페인1</h3>,
        <h3>"가상 동반자를 현실로” :<br /> 유기견 입양 캠페인2</h3>,
        <h3>"가상 동반자를 현실로” :<br /> 유기견 입양 캠페인3</h3>,
        <h3>"가상 동반자를 현실로” :<br /> 유기견 입양 캠페인4</h3>]

    const Sub = [
        "PIU는 실제 유기되어 안락사를 기다리는 반려견들로 패션쇼를 진행합니다.",
        "PIU는 실제 유기되어 안락사를 기다리는 반려견들로 패션쇼를 진행합니다.",
        "PIU는 실제 유기되어 안락사를 기다리는 반려견들로 패션쇼를 진행합니다.",
        "PIU는 실제 유기되어 안락사를 기다리는 반려견들로 패션쇼를 진행합니다."
    ]

    return (
        <div className={`slideItem slideItem${level} ${selected === level ? "active grow" : ""}`} onClick={() => { handleActive(level) }}>
            {showText &&
                <>
                    <div>
                        <p className='AccordionTitle pretendard-EB text-focus-in'>
                            {Title[level]}
                        </p>
                        <p className='AccordionSub text-md pretendard-B text-focus-in'>
                            {Sub[level]}
                        </p>
                    </div>
                </>}
        </div>
    )
}

export default Accordion;