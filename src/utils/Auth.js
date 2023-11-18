import axios from 'axios';

export const APIClient = () => axios.create({
    baseURL: 'https://www.naver.com/',
    headers: {
        'Content-Type': 'application/json',
    }
})