import { useState } from 'react';
import '../../css/Home.css';
const Main = () => {
    const [selectedElement, setSelectedElement] = useState(0);

    const handleActive = (index) => {
        setSelectedElement(index);
    };

    return (
        <div>
            <div className="slideBox flex justify-center items-center mx-auto">
                <div className={`slideItem ${selectedElement === 0 ? "grow active" : ""}`} onClick={() => { handleActive(0) }}>
                    <h3>Tisger1</h3>
                </div>
                <div className={`slideItem ${selectedElement === 1 ? "grow active" : ""}`} onClick={() => { handleActive(1) }}>
                    <h3>Tiger2</h3>
                </div>
                <div className={`slideItem ${selectedElement === 2 ? "grow active" : ""}`} onClick={() => { handleActive(2) }}>
                    <h3>Tiger3</h3>
                </div>
                <div className={`slideItem ${selectedElement === 3 ? "grow active" : ""}`} onClick={() => { handleActive(3) }}>
                    <h3>Tiger4</h3>
                </div>
            </div>
        </div>

    )
}

export default Main;