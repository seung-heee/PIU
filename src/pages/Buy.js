import Nav from "../components/Nav";
import { images } from '../utils/images';

const Buy = () => {
    return (
        <>
            <Nav />
            <div className="Buy">
                <div className="container mx-auto">
                    <div className="w-full flex">
                        <div className="w-1/2"><img src={images.buy1} alt="패키지 이미지" className="p-8" /></div>
                        <div className="w-1/2">
                            <p>☆코스튬 기획전☆[도그웨그] 공작새
                                강아지 코스튬 고양이 할로윈 코스프레 옷 [오프라인전용]</p>
                            <div>
                                <form className="flex flex-col">
                                    <select name="Brand">
                                        <option value="브랜드A" selected="selected">브랜드A</option>
                                        <option value="브랜드B">브랜드B</option>
                                        <option value="브랜드C">브랜드C</option>
                                    </select>
                                    <select name="Size">
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                    <output name="result" for="a b"></output>
                                    <input type="submit" value="구매하기" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy;