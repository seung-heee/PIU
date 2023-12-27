import axios from 'axios';

export const APIClient = () => axios.create({
    baseURL: 'https://www.petinuniverse.com/',
    headers: {
        'Content-Type': 'application/json',
    }
})