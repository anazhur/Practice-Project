import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartContainer from '../../components/CartContainer'
import s from './index.module.css'
import OrderForm from '../../components/OrderFrom'

export default function CartPage() {

  const cartState = useSelector(store => store.cart)

  return (
    <div className={s.cartPage}>
      <div>
        <h2>Shopping cart</h2>
        <hr />
        <Link to='/'>
          Back to the store
        </Link>
      </div>
      <div>
        {
          cartState.length === 0
          ? <div>
            <p>Looks like you have no items in your basket currently.</p>
            <Link to='/all_products'>
              <button>Continue Shopping</button>
            </Link>
          </div> 
          : <>
            <CartContainer/>
            <OrderForm count={cartState.reduce((acc, el) => acc + el.count, 0)} />
          </>
        }

      </div>
    </div>
  )
}
