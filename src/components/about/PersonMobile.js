import { images } from '../../utils/images';
import PersonInfo from '../../utils/PersonInfo.json';

const PersonMobile = ({ id }) => {
    const result = PersonInfo.filter(person => person.id === id)

    return (
        <div className='personMobile flex flex-col justify-end items-center m-1'>
            {result.map((person) => {
                return (
                    <>
                        <div className='flex items-start justify-center text-sm mr-auto'>
                            {/* <img src={images[person.image]} alt="사람" className='w-5' /> */}
                            <div className='ml-2'>
                                <p>{person.name}</p>
                                <p className='font-bold'>{person.email}</p>
                            </div >
                        </div>
                    </>
                )
            })}

        </div >

    )
}

export default PersonMobile;