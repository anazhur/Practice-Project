import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import Breadcrumb from '../../components/Breadcrumb';
import FilterForm from '../../components/FilterForm';
import SortForm from '../../components/SortForm';
import { filterByPriceProductsAction, sortAllProductsAction } from '../../store/reducers/allProductsReducer';
import s from './index.module.css'

export default function FavoritesPage() {

const favoriteState = useSelector(store => store.favorites);

const favoriteStateWithVisible = favoriteState.map(product => ({
  ...product,
  visible: true
}))

  return (
    <div className={s.container}>
       <Breadcrumb />
      <h2>Liked products</h2>
      <div>
        <FilterForm action={filterByPriceProductsAction} />
        <SortForm action={sortAllProductsAction} state={favoriteState} />
      </div>
      <div>
        <ProductsContainer products={favoriteStateWithVisible} />
      </div>
    </div>
  )
}
