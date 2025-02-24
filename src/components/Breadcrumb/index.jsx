import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";  // Подключаем useSelector для получения данных из Redux

import s from './index.module.css';

const Breadcrumb = () => {
  const { product_id, id } = useParams();  // Получаем product_id и category_id из URL
  const location = useLocation();  // Получаем текущий путь
  const [categoryTitle, setCategoryTitle] = useState('');  // Состояние для хранения title категории
  const [productTitle, setProductTitle] = useState('');  // Состояние для хранения title товара

  // Получаем SingleProductState из Redux
  const SingleProductState = useSelector((store) => store.singleProduct);
  const { title: productTitleFromState } = SingleProductState.state; // Делаем деструктуризацию для получения title из состояния товара

  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3333';  // URL API

  // Логика для получения данных о категории
  useEffect(() => {
    if (location.pathname.startsWith('/categories') && id) {
      const fetchCategory = async () => {
        try {
          const response = await fetch(`${baseUrl}/categories/all`);
          if (!response.ok) {
            throw new Error("Failed to fetch categories");
          }
          const data = await response.json();
          const category = data.find((cat) => cat.id === parseInt(id));  // Ищем категорию по category_id
          if (category) {
            setCategoryTitle(category.title);
          }
        } catch (error) {
          console.error("Error fetching category:", error);
        }
      };
      fetchCategory();
    }
  }, [id, baseUrl, location.pathname]);

  // Генерация хлебных крошек
  const getBreadcrumbs = () => {
    const breadcrumbs = [
      { label: 'Main page', path: '/' },
    ];

    if (location.pathname.startsWith('/all_products')) {
      breadcrumbs.push({ label: 'All products', path: '/all_products' });
    }

    if (location.pathname.startsWith('/favorites')) {
      breadcrumbs.push({ label: 'Liked products', path: '/favorites' });
    }

    if (location.pathname.startsWith('/categories')) {
      breadcrumbs.push({ label: 'Categories', path: '/categories' });

      // Добавляем категорию, если указан `category_id`
      if (categoryTitle) {
        breadcrumbs.push({
          label: categoryTitle,
          path: `/categories/${id}`,
        });
      }
    }

    // Для страницы товара (используем title из SingleProductState)
    if (location.pathname.startsWith('/products') && product_id) {
      breadcrumbs.push({ label: 'All products', path: '/all_products' });
      breadcrumbs.push({
        label: productTitleFromState || productTitle || 'Product not found',
        path: `/products/${product_id}`,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className={s.breadcrumb}>
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          <Link to={breadcrumb.path} className={s.breadcrumb__link}>
            {breadcrumb.label}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <span className={s.breadcrumb__separator}>—</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
