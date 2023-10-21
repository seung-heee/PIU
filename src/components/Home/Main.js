import { useRef } from 'react';
import { useEffect } from 'react';
import '../../css/Home.css';
import { useState } from 'react';
import gsap from 'gsap';
const Main = () => {
    const itemsRef = useRef(null);
    const [clickedIndex, setClickedIndex] = useState(0);

    useEffect(() => {
        console.log(clickedIndex);
        console.log(itemsRef.current);
        if (itemsRef.current) {
            const items = itemsRef.current.querySelectorAll('.item');

            const expand = (item, i) => {
                items.forEach((it, ind) => {
                    if (i === ind) return;
                    it.classList.remove('clicked');
                });

                if (clickedIndex === i) {
                    setClickedIndex(null);
                    gsap.to(item, {
                        width: '8vw',
                        duration: 2,
                        ease: 'elastic(1, .6)',
                    });
                } else {
                    setClickedIndex(i);
                    item.classList.add('clicked');
                    gsap.to(items, {
                        width: '8vw',
                        duration: 2,
                        ease: 'elastic(1, .6)',
                    });
                    gsap.to(item, {
                        width: '50vw',
                        duration: 2.5,
                        ease: 'elastic(1, .3)',
                    });
                }
            };

            items.forEach((item, i) => {
                item.addEventListener('click', () => expand(item, i));
            });
        }
    }, [clickedIndex]);

    return (
        <div className="Main section min-h-screen">
            <div className="group " ref={itemsRef}>
                <div className="item">first</div>
                <div className="item">second</div>
                <div className="item">third</div>
                <div className="item">fourth</div>
            </div>
        </div>

    )
}

export default Main;