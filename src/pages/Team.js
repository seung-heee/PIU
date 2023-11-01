import '../css/About.css';
import Person from '../components/about/Person';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import PersonInfo from '../utils/PersonInfo.json';

const Team = () => {
    const web = PersonInfo.filter(person => person.position === 'WEB')
    const metaverse = PersonInfo.filter(person => person.position === 'METAVERSE')
    const modeling = PersonInfo.filter(person => person.position === 'MODELING')
    return (
        <div className="Team min-h-screen">
            <Link to='/'>
                <PiArrowUDownLeftBold className='text-3xl absolute top-8 left-8' />
            </Link>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className='flex justify-end items-center w-10/12'>
                    <div className='pretendard-EB text-4xl w-1/5 text-center'>METAVERSE</div>
                    <div className='people flex grow justify-center w-4/5'>
                        {metaverse.map((person) => {
                            return (
                                <><Person id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
                <div className='flex justify-center items-center w-10/12'>
                    <div className='pretendard-EB text-4xl w-1/5 text-center'>3D MODELING</div>
                    <div className='people flex grow justify-center w-4/5'>
                        {modeling.map((person) => {
                            return (
                                <><Person id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
                <div className='flex justify-center items-center w-10/12'>
                    <div className='pretendard-EB text-4xl w-1/5 text-center'>WEB</div>
                    <div className='people flex grow justify-center w-4/5'>
                        {web.map((person) => {
                            return (
                                <><Person id={person.id} /></>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;