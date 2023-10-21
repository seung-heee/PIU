import { useEffect } from 'react';
import About from '../components/Home/About';
import Help1 from '../components/Home/Help1';
import Help2 from '../components/Home/Help2';
import Help3 from '../components/Home/Help3';
import Main from '../components/Home/Main';
import Purchase from '../components/Home/Purchase';
import fullpage from 'fullpage.js';
import Nav from '../components/Nav';

const Home = () => {
    useEffect(() => {
        new fullpage('#fullpage', {
            autoScrolling: true,
            scrollHorizontally: false,
            anchors: ['nav', 'main', 'help1', 'help2', 'help3', 'purchase', 'about']
        });
    }, []);

    return (
        <div id="fullpage">
            <Nav />
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