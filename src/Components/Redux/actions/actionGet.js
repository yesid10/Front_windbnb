import axios from "axios"
import { setRooms } from "../reducers/roomReducer.js";

const URL_API_FAKE = 'https://back-windbnb.onrender.com/'

export const getHabitacionesAPI = (endpoint) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_API_FAKE}${endpoint}`);
            dispatch(setRooms(data))
            
        } catch (error) {
            console.log('Error al realizar la peticion a la API', error);
            return [];
        }
    }


}