import '../../css/About.css';
import Person from '../about/Person';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import PersonInfo from '../../utils/PersonInfo.json';
import ScrollToTop from '../ScrollToTop';

const Team2 = () => {
    const web = PersonInfo.filter(person => person.position === 'WEB')
    const metaverse = PersonInfo.filter(person => person.position === 'METAVERSE')
    const modeling = PersonInfo.filter(person => person.position === 'MODELING')

    return (
        <div className="Team min-h-screen container mx-auto flex items-center justify-center">
            <div className='teamBox flex justify-center rounded-md'>
                <div className='pretendard-EB text-5xl mb-10 bg-white rounded-md teamTitle text-center'>PIU TEAM</div>
                <div className='flex flex-col '>
                    {/* 총괄 */}
                    <div className='flex justify-center items-start mb-3'>
                        <div>
                            <div className='pretendard-B text-2xl text-center'>CEO</div>
                            <Person id={1} />
                        </div>
                    </div>
                    {/* 메타버스 */}
                    <div className='flex justify-center items-start'>
                        <div>
                            <div className='pretendard-B text-2xl text-center'>METAVERSE</div>
                            {metaverse.map((person) => {
                                return (
                                    <><Person id={person.id} /></>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* 모델링 */}
                <div className='flex justify-center items-start'>
                    <div>
                        <div className='pretendard-B text-2xl text-center'>MODELING</div>
                        {modeling.map((person) => {
                            return (
                                <><Person id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
                {/* 웹 */}
                <div className='flex justify-center items-start'>
                    <div>
                        <div className='pretendard-B text-2xl  text-center'>WEB</div>
                        {web.map((person) => {
                            return (
                                <><Person id={person.id} /></>
                            )
                        })}
                    </div>
                </div>



            </div>
            <ScrollToTop />
        </div>
    )
}

export default Team2;