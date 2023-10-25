import { useNavigate } from "react-router-dom";
import { images } from '../../utils/images';
import Footer from "../Footer";

const About = () => {
    const Navigate = useNavigate();

    return (
        <div className="section fp-auto-height min-h-screen">
            <div className="p-12">
                <p>우리회사 소개 어ㅉㅓ고</p>
                <p className="pretendard-EB text-5xl">Meet Our Company</p>
            </div>

            <div className="AboutCompany flex justify-center items-end p-10">
                <div className="mr-5">
                    <img src={images.company} alt="기업" className="rounded-md" />
                </div>

                <div className="AboutCompanyContent w-1/2 pr-10 mb-20 ml-5">
                    <div className="pretendard-B text-3xl">
                        <p className="mb-3 text-5xl PIUTEXT">PIU</p>
                        <p>
                            PIU는 ~기업입니다.PIU는 ~기업입니다.PIU는 ~기업입니다.
                        </p>
                    </div>

                    <div className="text-right mt-5 text-xl" onClick={() => { Navigate(`/team`) }}>
                        Meet Our Team
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About;