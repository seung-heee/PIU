import { useState } from 'react';
import '../../css/Home.css';
import Accordion from './Accordion';
import '../../css/media.css';

const Main = () => {
    const [selected, setSelected] = useState(0);
    const [showText, setShowText] = useState(false);

    return (
        <div className='Main'>
            <div className="slideBox flex items-center mx-auto container">
                <Accordion level={0} selected={selected} setSelected={setSelected} showText={showText} setShowText={setShowText} />
                <Accordion level={1} selected={selected} setSelected={setSelected} showText={showText} setShowText={setShowText} />
                <Accordion level={2} selected={selected} setSelected={setSelected} showText={showText} setShowText={setShowText} />
                <Accordion level={3} selected={selected} setSelected={setSelected} showText={showText} setShowText={setShowText} />
            </div>
        </div>

    )
}

export default Main;