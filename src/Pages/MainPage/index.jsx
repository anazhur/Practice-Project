import React, { useEffect } from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import s from './index.module.css'
import ProductsContainer from '../../components/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscountedProducts } from '../../requests/products'
import { Link } from 'react-router-dom'
import DiscountForm from '../../components/DiscountForm'

export default function MainPage() {

    const dispatch = useDispatch();

    const discountedProducts = useSelector(store => store.discountedProducts)

    useEffect(() => {
        dispatch(getDiscountedProducts())
    }, [dispatch]);

    const randomDiscountedProducts = discountedProducts.sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div className={s.main}>
      <div className={s.header}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <Link to="/all_sales" className={s.checkOutLink}>Check out</Link>
        {/* Контейнер для редиректа на страницу со всеми товарами со скидкой */}
      </div>
      <div className={s.mainCategories}>
        <div>
          <h2>Categories</h2>
          <hr />
          <Link to='/categories'>
            <button>All categories </button>
          </Link>
        </div>
        <div>
          <CategoriesContainer limit={4} />
        </div>
      </div>
      <DiscountForm />
      <div className={s.mainSale}>
        <div>
          <h2>Sale</h2>
          <hr />
          <Link to='/all_sales'>
            <button className={s.sales_button}>All sales</button>
          </Link>
        </div>
        <div>
          {/* Отображаем 4 случайных товара со скидкой */}
          <ProductsContainer products={randomDiscountedProducts} />
        </div>
      </div>
    </div>
  );
}
