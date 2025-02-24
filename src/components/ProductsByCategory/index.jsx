import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsContainer from '../../components/ProductsContainer';
import FilterForm from '../FilterForm';
import CheckBox from '../CheckBox';
import SortForm from '../SortForm';
import s from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { filterByPriceCategoryAction, filterDiscountProductsByCategoryAction, sortAllCategoriesAction } from '../../store/reducers/productsByCategoryReducer';

export const ProductsByCategory = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);

  const allProductsByCategoryState = useSelector(store => store.productsByCategory)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategoryData = async () => {
      const response = await fetch(`http://localhost:3333/categories/${id}`);
      const data = await response.json();
      setCategoryData(data);

      // Диспетчеризация данных в Redux
    dispatch({ type: 'LOAD_PRODUCTS_BY_CATEGORY', payload: data.data });
    };
    fetchCategoryData();
  }, [id]);

  return (
    <div className={s.container}>
      <h1>{categoryData?.category?.title}</h1>
      <div className={s.sorting}>
        <FilterForm action={filterByPriceCategoryAction} />
        <CheckBox action={filterDiscountProductsByCategoryAction} />
        <SortForm action={sortAllCategoriesAction} state={allProductsByCategoryState}/> {/* Передаем обработчик сортировки */}
      </div>
      {categoryData ? (
        <ProductsContainer 
          products={allProductsByCategoryState.allCategoryProducts}
          limit="all"  // Отображаем все товары в категории
          categoryId={parseInt(id)}  // Передаем ID категории для фильтрации
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
