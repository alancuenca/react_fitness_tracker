import axios from 'axios'; 

const BASE_URL = "https://shrouded-crag-86388.herokuapp.com/api"

export const fetchRoutines = async () => {
    try { 
        const { data } = await axios.get(`${BASE_URL}/routines`)
        console.log('data: ', data)
        return data;
    } catch(error) {
        console.error(error)
    }
};