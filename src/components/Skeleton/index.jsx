import React from 'react'
import s from './index.module.css'

export default function Skeleton() {

  const rectangles = Array(11).fill(null); // Массив из 11 `null`

  return (
    <div className={s.container}>
      {rectangles.map((_, index) => (
        <div key={index}>
        </div>
      ))}
    </div>
  )
}
