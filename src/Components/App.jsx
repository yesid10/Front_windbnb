
import './StyledApp.scss';
import { HiStar } from 'react-icons/hi';
import { useSelector } from "react-redux";

const App = () => {

    // const [listHabitaciones, setListHabitaciones] = useState([]);

    // useEffect(() => {
    //     getHabitacionesAPI('habitaciones')
    //         .then((response) => {
    //             if (!listHabitaciones.length) {
    //                 setListHabitaciones(response);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [listHabitaciones]);
    const habitaciones = useSelector((store) => store.roomReducer.room);
 


    return (
        <div>
           
            <div className="container">
                {
                    habitaciones?.map((room, index) => (
                        <div className="container__habitacion" key={index}>
                            <img src={room.photo} alt="" />
                            <div className="container__info">
                                <div className="container__typeRoom">
                                {
                                    room.superHost && 
                                    <span>SUPER HOST</span>
                                }
                                <p>{room.type} {room.superHost && room.beds != null ? `. ${room.beds} beds` : ''}</p>
                                </div>
                                
                                <div className="container__rating">
                                    <HiStar style={{ color: room.type === 'Private room' ? '#EB5757B8' : '#EB5757', fontSize: '24px' }} />
                                    <span>{room.rating}</span>
                                </div>
                            </div>
                            <div>
                                <span>{room.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default App