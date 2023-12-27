const PiuCampaignHori = ({ vertical }) => {
    return (
        <div className="PiuCampaignHori absolute top-5 right-5 ">
            <p className={`text-white text-2xl pretendard-B ${vertical ? 'verti' : ''}`}>PIU Campaign</p>
        </div>
    )
}

export default PiuCampaignHori;