import '../css/About.css';
import Person from '../components/about/Person';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import PersonInfo from '../utils/PersonInfo.json';
import ScrollToTop from '../components/ScrollToTop';

const Team2 = () => {
    const web = PersonInfo.filter(person => person.position === 'WEB')
    const metaverse = PersonInfo.filter(person => person.position === 'METAVERSE')
    const modeling = PersonInfo.filter(person => person.position === 'MODELING')

    return (
        <div className="Team min-h-screen container mx-auto">
            <div className='flex justify-evenly items-center teamBox'>
                <div className='flex flex-col justify-start'>
                    {/* 총괄 */}
                    <div className='mb-10'>
                        <div className='pretendard-B text-2xl'>CEO</div>
                        <Person id={1} />
                    </div>
                    {/* 메타버스 */}
                    <div>
                        <div className='pretendard-B text-2xl'>METAVERSE</div>
                        {metaverse.map((person) => {
                            return (
                                <><Person id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
                {/* 모델링 */}
                <div className='flex flex-col justify-start'>

                    <div className='pretendard-EB text-5xl mb-10 bg-white teamTitle text-center'>PIU<br />TEAM</div>

                    <div>
                        <div className='pretendard-B text-2xl'>MODELING</div>
                        {modeling.map((person) => {
                            return (
                                <><Person id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
                {/* 웹 */}
                <div className='flex flex-col'>
                    <div>
                        <div className='pretendard-B text-2xl'>WEB</div>
                        {web.map((person) => {
                            console.log(person.id)
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