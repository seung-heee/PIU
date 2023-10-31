import { useState } from "react";
import '../../css/About.css';
import { images } from '../../utils/images';
import Company from '../../utils/Company.json';

const SponsoringCompany = () => {
    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);

    return (
        <div className="wrapper">
            <div className="">후원기업</div>

        </div>
    );
}

export default SponsoringCompany;