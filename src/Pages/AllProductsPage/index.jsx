import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import s from './index.module.css'
import { useSelector } from 'react-redux'
import SortForm from '../../components/SortForm'
import { filterByPriceProductsAction, filterDiscountProductsAction, sortAllProductsAction } from '../../store/reducers/allProductsReducer'
import FilterForm from '../../components/FilterForm'
import CheckBox from '../../components/CheckBox'
import Breadcrumb from '../../components/Breadcrumb'

export default function AllProductsPage() {
  const allProductsState = useSelector(store => store.allProducts)

  return (
    <div className={s.allProducts}>
      <Breadcrumb />
      <h2>All products</h2>
      <div>
        <FilterForm action={filterByPriceProductsAction} />
        <CheckBox action={filterDiscountProductsAction} />
        <SortForm action={sortAllProductsAction} state={allProductsState} />
      </div>
      <div>
      <ProductsContainer products={allProductsState.allProducts} limit="all" />
      </div>
    </div>
  )
}
