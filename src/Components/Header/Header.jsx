import { useDispatch, useSelector } from "react-redux";
import { getHabitacionesAPI } from "../Redux/actions/actionGet";
import { useEffect, useState } from "react";

const Header = () => {

    const habitaciones = useSelector((store) => store.roomReducer.room);
    const [roomsLoaded, setRoomsLoaded] = useState(false);
    const [listHabitaciones, setListHabitaciones] = useState([]);
    const dispatch = useDispatch();

    const listRoomsForApi = () => {
        dispatch(getHabitacionesAPI('habitaciones'));
    }
  
    useEffect(() => {
      if(!roomsLoaded){
        listRoomsForApi();
        setRoomsLoaded(true);
      }
      setListHabitaciones(habitaciones);
      
    }, [habitaciones, listRoomsForApi])

    console.log(listHabitaciones);
  return (
    <div>
        <h4>Stays in Finland</h4>
        <span></span>
    </div>
  )
}

export default Header