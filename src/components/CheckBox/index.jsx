import React, { useState } from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'

export default function CheckBox({action}) {

  const dispatch = useDispatch();

  const [ isChecked, setIsChecked ] = useState(false)
  const handleCheck = () => setIsChecked(!isChecked)
  const handleClick = e => dispatch(action(e.target.checked))

  return (
    <div className={s.checkBox}>
        <label>
            <p>Discounted items</p>
            <input type="checkbox" onChange={handleCheck} checked={isChecked} onClick={handleClick} />
        </label>
    </div>
  )
}
