import { useEffect } from 'react';
import About from '../components/Home/About';
import Help1 from '../components/Home/Help1';
import Help2 from '../components/Home/Help2';
import Help3 from '../components/Home/Help3';
import Main from '../components/Home/Main';
import Purchase from '../components/Home/Purchase';
import fullpage from 'fullpage.js';

const Home = () => {
    useEffect(() => {
        new fullpage('#fullpage', {
            autoScrolling: true,
            scrollHorizontally: false,
            anchors: ['slide1', 'slide2', 'slide3']
        });
    }, []);

    return (
        <div id="fullpage">
            <Main />
            <Help1 />
            <Help2 />
            <Help3 />
            <Purchase />
            <About />
        </div>
    )
}

export default Home;