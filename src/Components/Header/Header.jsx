import { useDispatch, useSelector } from "react-redux";
import { getHabitacionesAPI } from "../Redux/actions/actionGet";
import { useEffect, useReducer, useState } from "react";
import ImgLogo from '../../assets/logo.png';
import { Button, Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { ImSearch } from 'react-icons/im';
import './StylesHeader.scss'

const Header = () => {

  const habitaciones = useSelector((store) => store.roomReducer.room);
  const [roomsLoaded, setRoomsLoaded] = useState(false);
  const [listHabitaciones, setListHabitaciones] = useState([]);
  const dispatch = useDispatch();

  const listRoomsForApi = () => {
    dispatch(getHabitacionesAPI('habitaciones'));
  }

  useEffect(() => {
    if (!roomsLoaded) {
      listRoomsForApi();
      setRoomsLoaded(true);
    }
    setListHabitaciones(habitaciones);

  }, [habitaciones, listRoomsForApi])

  function exampleReducer(state, action) {
    switch (action.type) {
      case 'close':
        return { open: false }
      case 'open':
        return { open: true, size: action.size }
      default:
        throw new Error('Unsupported action...')
    }
  }


  const [state, dispatchButtoanSemantic] = useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state;

  return (
    <div className="ContainerHeader">
      <div className="ContainerHeader__DivLogo">
        <figure>
          <img src={ImgLogo} alt="Logo_windbnb" />
        </figure>
        <Button className="containerButtons" onClick={() => dispatchButtoanSemantic({ type: 'open', size: 'fullscreen' })}>
          <span>Helsinki, Finland</span>
          <span>Add guests</span>
          <span className="btn__BorderNone"><ImSearch style={{ color: '#EB5757' }} /></span>
        </Button>
        <Modal
          size={size}
          open={open}
          onClose={() => dispatchButtoanSemantic({ type: 'close' })}
        >
          <Modal.Header className="containerButtonsModal" >
            <button  >Helsinki, Finland</button>
            <button >Add guests</button>
            <button className="btn__BorderNone" ><ImSearch style={{ color: '#EB5757' }} />Search</button>
          </Modal.Header>

        </Modal>
      </div>
      <div className="ContainerHeader__amountRoom">
        <p>Stays in Finland</p>
        <span className="amountRooms">{listHabitaciones?.length}+ <span>stays</span></span>
      </div>
    </div>
  )

}

export default Header