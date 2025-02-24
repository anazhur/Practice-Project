import React, { useEffect } from 'react'
import ProductsContainer from '../../components/ProductsContainer';
import s from './index.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscountedProducts } from '../../requests/products';
import SortForm from '../../components/SortForm';
import FilterForm from '../../components/FilterForm';
import { filterByPriceDiscountedProductsAction, sortAllDiscountedProductsAction } from '../../store/reducers/discountedProductsReducer';

export default function DiscountedProductPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscountedProducts());
  }, [])

  const discountedProductsState = useSelector(store => store.discountedProducts)
  // const allProductsState = useSelector(store => store.allProducts)
  

  return (
    <div className={s.discountedProducts}>
      <div>
        <Link to={'/'}>
          <p>Main Page</p>
        </Link>
        <hr />
        <Link to={'/all_sales'}>
          <p>All sales</p>
        </Link>
      </div>
      <h2>Discounted items</h2>
      <div>
        <FilterForm action={filterByPriceDiscountedProductsAction} />
        <SortForm action={sortAllDiscountedProductsAction} state={discountedProductsState}/>
      </div>
      <div>
        <ProductsContainer products={discountedProductsState} />
      </div>
    </div>
  )
}
