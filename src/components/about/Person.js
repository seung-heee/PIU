import { images } from '../../utils/images';

const Person = () => {
    return (
        <div className='person flex flex-col justify-end items-center my-5 mx-4'>
            <img src={images.main5} alt="사람이미지" />
            <div className='flex flex-col justify-center items-center mt-2'>
                <p>노승희</p>
                <p>미디어소프트웨어학과 20</p>
                <p>FREONT-END</p>
            </div>
        </div>
    )
}

export default Person
