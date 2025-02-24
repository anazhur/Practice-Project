import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';

export default function FilterForm({action}) {

  const dispatch = useDispatch();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Infinity);

  const handleMinValue = e => setMinValue(e.target.value || 0)
  const handleMaxValue = e => setMaxValue(e.target.value || Infinity)

  useEffect(() => {
    dispatch(action({minValue, maxValue}))
  }, [minValue, maxValue])

  // useEffect(() => {
  //   console.log('Dispatching filter action:', { minValue, maxValue });
  //   if (minValue >= 0 && maxValue >= 0) {
  //     dispatch(action({ minValue, maxValue }));
  //   }
  // }, [minValue, maxValue, dispatch, action]);

  return (
    <div className={s.filterFrom}>
        <p>Price</p>
        <input type="number" placeholder='from' name='min' onChange={handleMinValue} />
        <input type="number" placeholder='to' name='max' onChange={handleMaxValue} />
    </div>
  )
}
