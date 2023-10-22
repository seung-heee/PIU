import { Link } from "react-router-dom";
import { images } from '../../utils/images';

const About = () => {
    return (
        <div className="section min-h-screen">
            <div className="p-12">
                <p>우리회사 소개 어ㅉㅓ고</p>
                <p className="pretendard-EB text-5xl">Meet Our Company</p>
            </div>

            <div className="AboutCompany flex justify-start items-end w-full">
                <div className="mr-8 w-1/2">
                    <img src={images.company} alt="기업" className="rounded-md" />
                </div>

                <div className="AboutCompanyContent w-1/2 pr-10 mb-20">
                    <div className="pretendard-B text-3xl">
                        <p className="mb-3 text-5xl">PIU</p>
                        <p>
                            PIU는 ~기업입니다.PIU는 ~기업입니다.PIU는 ~기업입니다.
                        </p>
                    </div>

                    <div className="text-right mt-5 text-xl">
                        <Link to='#'>Meet Our Team</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;