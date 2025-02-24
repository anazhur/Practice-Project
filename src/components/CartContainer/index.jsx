import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'

export default function CartContainer() {

    const cartState = useSelector(store => store.cart)

  return (
    <div>
        {
            cartState.map(el => <CartItem key={el.id} {...el} />)
        }
    </div>
  )
}
