import '../../css/Accordion.css';
import '../../css/media.css';

const Accordion = ({ level, selected, setSelected, showText, setShowText }) => {
    const handleActive = (index) => {
        setSelected(index);
        setShowText(true);
    };

    const Title = [
        <h3>가상 동반자를 현실로 :<br /> 유기견 입양 캠페인</h3>,
        <h3>"메타버스 패션쇼 :<br /> 패션으로 후원하다"</h3>,
        <h3>"함께 PIU팀이 되어<br /> 유기견들을 도와주세요."</h3>,
        <h3>"유기견에게<br />  새로운 가족을 <br /> 찾아주세요."</h3>]

    const Sub = [
        "PIU는 실제 유기되어 안락사를 기다리는 반려견들로 패션쇼를 진행합니다.",
        "하나 되는 패션쇼로 유기견들을 돕는 행복함을 경험하세요.",
        "PIU는 실제 유기되어 안락사를 기다리는 반려견들로 패션쇼를 진행합니다.",
        "PIU는 실제 유기되어 안락사를 기다리는 반려견들로 패션쇼를 진행합니다."
    ]

    return (
        <div className={`w-1/12 slideItem slideItem${level} ${selected === level ? "active grow" : ""}`} onClick={() => { handleActive(level) }}>
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