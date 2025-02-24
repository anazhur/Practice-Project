import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { dectCartAction, deleteFromCartAction, incrCartAction } from '../../store/reducers/cartReducer';
import s from './index.module.css'


export default function CartItem({id, image, title, price, discont_price, count}) {

    const dispatch = useDispatch();

  return (
    <div className={s.cartItem}>
        <div>
            <img src={`http://localhost:3333${image}`} alt={ title } />
            <div>
                <RxCross1 onClick={() => dispatch(deleteFromCartAction(id))}/>
                <p> { title } </p>
                <div>
                    <div className={s.countButton}>
                        <button onClick={() => dispatch(dectCartAction(id))} >-</button>
                        <p> { count } </p>
                        <button onClick={() => dispatch(incrCartAction(id))}>+</button>
                    </div>
                    <div className={s.price} > 
                        {discont_price ? (
                            <div>
                                <p className={s.ndPrice}> ${(discont_price * count).toFixed(2)} </p>
                                <p className={s.dPrice}> ${(price * count).toFixed(2)} </p>
                            </div>
                        ) : (
                            <p className={s.ndPrice}> ${(price * count).toFixed(2)} </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
