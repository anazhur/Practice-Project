import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'

export default function SortForm({ action }) {

  const dispatch = useDispatch();

  const sortProducts = e => dispatch(action(e.target.value));

  return (
    <div className={s.sorting}>
        <div>
          <p>Sort by</p>
          <select onChange={sortProducts}>
            <option value="by_default">by default</option>
            <option value="newest">newest</option>
            <option value="price_hight-low">price: high-low</option>
            <option value="price_low-hight">price: low-high</option>
          </select>
        </div>
    </div>
  )
}
