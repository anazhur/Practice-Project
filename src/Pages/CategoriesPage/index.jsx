import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import s from './index.module.css'
import Breadcrumb from '../../components/Breadcrumb'

export default function CategoriesPage() {
  return (
    <div className={s.categories}>
      <Breadcrumb />
      <CategoriesContainer/>
    </div>
  )
}
