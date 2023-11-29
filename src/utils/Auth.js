import axios from 'axios';

export const APIClient = () => axios.create({
    baseURL: 'url',
    headers: {
        'Content-Type': 'application/json',
    }
})