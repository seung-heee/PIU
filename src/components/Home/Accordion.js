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
        <p>우리는 PIU팀, 메타버스에서 유기견을 구조하고 입양을 촉진하는 팀입니다.<br /> 가상 세계에서 실제로 유기견의 새로운 시작을 만들어냅니다.</p>,
        <p>한 데 모여 새로운 시작을 위한 패션쇼를 즐겨보세요.<br />  PIU팀과 함께 유기견들을 돕는 행복한 순간을 경험하세요.</p>,
        <p>유기견 아이들에게 손 내밀어주세요.<br /> PIU와 함께 유기견 패션쇼 및 전시회를 통해 아이들의 이야기를 세상에 전파하세요.</p>,
        <p>아이들에게 두 번째 기회를 주세요. <br /> 저희와 함께 유기견의 이야기를 세상에 전하고, <br /> 아이들이 행복한 가족을 찾을 수 있도록 도와주세요.</p>
    ]

    return (
        <div className={`w-1/12 slideItem slideItem${level} ${selected === level ? "active grow" : ""}`} onClick={() => { handleActive(level) }}>
            {showText &&
                <>
                    <div>
                        <p className='AccordionTitle pretendard-EB text-focus-in'>
                            {Title[level]}
                        </p>
                        <p className='AccordionSub text-xl pretendard-B text-focus-in'>
                            {Sub[level]}
                        </p>
                    </div>
                </>}
        </div>
    )
}

export default Accordion;