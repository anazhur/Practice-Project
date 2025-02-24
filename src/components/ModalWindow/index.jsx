import React, { useContext } from 'react'
import s from './index.module.css'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { Context } from '../../context';
import { clearCartAction } from '../../store/reducers/cartReducer';

export default function ModalWindow() {

    const { modalActive, setModalActive } = useContext(Context);

    const dispatch = useDispatch();

    const modalStyles = {
        display: modalActive ? 'flex' : 'none'
    }

    const closeWindow = () => {
        setModalActive(false);
        dispatch(clearCartAction());
    }

  return (
    <div className={s.modal} style={modalStyles}>
        <div>
            <RxCross1 onClick={closeWindow}  />
            <h4>Congratulations!</h4>
            <p>Your order has been successfully placed on the website.</p>
            <br />
            <p>A manager will contact you shortly to confirm your order.</p>
        </div>
    </div>
  )
}
