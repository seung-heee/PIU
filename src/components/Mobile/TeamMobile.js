import '../../css/About.css';
import PersonInfo from '../../utils/PersonInfo.json';
import ScrollToTop from '../ScrollToTop';
import PersonMobile from '../about/PersonMobile';

const TeamMobile = () => {
    const web = PersonInfo.filter(person => person.position === 'WEB')
    const metaverse = PersonInfo.filter(person => person.position === 'METAVERSE')
    const modeling = PersonInfo.filter(person => person.position === 'MODELING')

    return (
        <div className="Team min-h-screen container mx-auto">
            <div className='grid grid-cols-2 teamBoxMobile h-screen'>
                {/* 총괄 */}
                <div>
                    <div>
                        <div className='pretendard-B text-lg'>CEO</div>
                        <PersonMobile id={1} />
                    </div>
                </div>
                <div className='flex flex-col justify-start'>

                    {/* 메타버스 */}
                    <div>
                        <div className='pretendard-B text-lg'>METAVERSE</div>
                        {metaverse.map((person) => {
                            return (
                                <><PersonMobile id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
                {/* 모델링 */}
                <div className='flex flex-col justify-start'>
                    <div>
                        <div className='pretendard-B text-lg'>MODELING</div>
                        {modeling.map((person) => {
                            return (
                                <><PersonMobile id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
                {/* 웹 */}
                <div className='flex flex-col'>
                    <div>
                        <div className='pretendard-B text-lg'>WEB</div>
                        {web.map((person) => {
                            console.log(person.id)
                            return (
                                <><PersonMobile id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default TeamMobile;