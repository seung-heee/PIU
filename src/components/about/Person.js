import { images } from '../../utils/images';
import PersonInfo from '../../utils/PersonInfo.json';

const Person = ({ id }) => {
    const result = PersonInfo.filter(person => person.id === id)
    return (
        <div className='person flex flex-col justify-end items-center my-5 mx-4'>
            {result.map((person) => {
                return (
                    <>
                        <img src={images[person.image]} alt="사람" />
                        <div className='flex flex-col justify-center items-center mt-2'>
                            <p>{person.name}</p>
                            <p>{person.department}</p>
                            <p>{person.role}</p>
                        </div>
                    </>
                )
            })}

        </div>

    )
}

export default Person
