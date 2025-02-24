import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard'
import s from './index.module.css'

export default function CategoriesContainer({ limit }) {

    const categoriesState = useSelector(store => store.categories)

    const displayedCategories = limit ? categoriesState.slice(0, limit) : categoriesState;

  return (
    <div className={s.container}  >
        {
            displayedCategories.map(el => <CategoryCard key={el.id} {...el} />)
        }
    </div>
  )
}
