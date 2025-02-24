import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import s from './index.module.css'
import { Context } from '../../context';

export default function OrderForm({count}) {

    const { setModalActive } = useContext(Context);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const cartState = useSelector(store => store.cart);

    const totalPrice = cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);

    const submit = data => {
        const newOrder = {
            ...data,
            totalPrice: +totalPrice,
            cart: cartState
        }

        setModalActive(true)

        console.log(newOrder)

        reset();
    }

    const nameRegister = register('name', {
        // required: '*The field Name is required'
        required: ''
    })
    const phoneRegister = register('phone', {
        // required: '*The field Phone is required',
        // pattern: {
        //     value: /^[1-9]\d{0,2}\d{10}$/,
        //     message: '*Phone number should contain country code and 10 digits'
        // }
        required: ''
    })
    const emailRegister = register('email', {
        // required: '*The field Email is required',
        // pattern: {
        //     value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
        //     message: '*Email is incorrect'
        //  }
        required: ''
    })

  return (
    <div className={s.orderForm}>
        <h2>Order details</h2>
        <div>
            <p> {count} items</p>
            <div>
                <p>Total</p>
                <p>${totalPrice}</p>
            </div>
        </div>
        <form onSubmit={handleSubmit(submit)} >
            <input type="text" placeholder='Name' {...nameRegister} />
            {errors.name && <p> { errors.name.message } </p>}
            <input type="text" placeholder='Phone' {...phoneRegister} />
            {errors.phone && <p> { errors.phone.message } </p>}
            <input type="text" placeholder='Email' {...emailRegister} />
            {/* { errors.email && <p> { errors.email.message } </p>} */}
            <button>Order</button>
        </form>
    </div>
  )
}
