import { FullPage, Slide } from 'react-full-page';
import About from '../components/Home/About';
import Help3 from '../components/Home/Help3';
import Help4 from '../components/Home/Help4';
import Main from '../components/Home/Main';
import Purchase from '../components/Home/Purchase';
import Nav from '../components/Nav';
import Team2 from '../components/Home/Team2';
import TeamMobile from '../components/Mobile/TeamMobile';
import { useState } from 'react';
import { useEffect } from 'react';
import Help1 from '../components/Home/Help1';


const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <FullPage controls controlProps={{ className: 'slide-navigation' }}>
                <Slide>
                    <div className="w-full h-full">
                        <Nav />
                        <Main />
                    </div>
                </Slide> <Slide>
                    <div className="w-full h-full"><Help1 /></div>
                </Slide>
                <Slide>
                    <div className="w-full h-full"><Help3 /></div>
                </Slide>
                <Slide>
                    <div className="w-full h-full"><Help4 /></div>
                </Slide>
                <Slide>
                    <div className="w-full h-full"><Purchase /></div>
                </Slide>
                <Slide>
                    <div className="w-full h-full"><About /></div>
                </Slide>
                <Slide>
                    <div className="w-full h-full">
                        {windowWidth <= 768 ? <TeamMobile /> : <Team2 />}
                    </div>
                </Slide>
            </FullPage >
        </>
    )
}

export default Home;