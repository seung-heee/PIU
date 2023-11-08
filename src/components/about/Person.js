import { images } from '../../utils/images';
import PersonInfo from '../../utils/PersonInfo.json';

const Person = ({ id }) => {
    const result = PersonInfo.filter(person => person.id === id)

    return (
        <div className='person flex flex-col justify-end items-center my-5 mx-4'>
            {result.map((person) => {
                return (
                    <>
                        <div className='flex flex-row items-center justify-start w-full'>
                            <img src={images[person.image]} alt="사람" />
                            <div className='ml-3'>
                                <p>{person.name}</p>
                                <p>{person.email}</p>
                                <p className='font-bold'>{person.role}</p>
                            </div >
                        </div>
                    </>
                )
            })}

        </div >

    )
}

export default Person
