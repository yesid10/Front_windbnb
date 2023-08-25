import axios from "axios"

const URL_API_FAKE = 'https://back-windbnb.onrender.com/'

export const getHabitacionesAPI = async (endpoint) => {
    try {
        const {data} = await axios.get(`${URL_API_FAKE}${endpoint}`);
        return data;
    } catch (error) {
        console.log('Error al realizar la peticion a la API', error);
        return [];
    }
}