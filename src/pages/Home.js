import { FullPage, Slide } from 'react-full-page';
import About from '../components/Home/About';
import Help1 from '../components/Home/Help1';
import Help2 from '../components/Home/Help2';
import Help3 from '../components/Home/Help3';
import Main from '../components/Home/Main';
import Purchase from '../components/Home/Purchase';
import Nav from '../components/Nav';
import Purchase2 from '../components/Home/Purchase2';

const Home = () => {
    return (
        <FullPage controls controlProps={{ className: 'slide-navigation' }}>
            <Slide>
                <div className="w-full h-full">
                    <Nav />
                    <Main />
                </div>
            </Slide>
            <Slide>
                <div className="w-full h-full"><Help1 /></div>
            </Slide>
            <Slide>
                <div className="w-full h-full"><Help2 /></div>
            </Slide>
            <Slide>
                <div className="w-full h-full"><Help3 /></div>
            </Slide>
            <Slide>
                <div className="w-full h-full"><Purchase /></div>
            </Slide>
            <Slide>
                <div className="w-full h-full"><Purchase2 /></div>
            </Slide>
            <Slide>
                <div className="w-full h-full"><About /></div>
            </Slide>
        </FullPage>
    )
}

export default Home;