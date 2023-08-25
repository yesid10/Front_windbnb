import { useState } from "react"
import { useEffect } from "react"
import { getHabitacionesAPI } from "../services/getHabitaciones"
import './StyledApp.scss';
import { HiStar } from 'react-icons/hi';

const App = () => {

    const [listHabitaciones, setListHabitaciones] = useState([]);

    useEffect(() => {
        getHabitacionesAPI('habitaciones')
            .then((response) => {
                if (!listHabitaciones.length) {
                    setListHabitaciones(response);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [listHabitaciones]);


    return (
        <div className="container">
            {
                listHabitaciones?.map((room, index) => (
                    <div className="container__habitacion" key={index}>
                        <img src={room.photo} alt="" />
                        <div className="container__info">
                            <p>{room.type}</p>
                            <div className="container__rating">
                                <HiStar style={{ color: room.type === 'Private room' ? '#EB5757B8' : '#EB5757', fontSize:'24px' }} />
                                <span>{room.rating}</span>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default App