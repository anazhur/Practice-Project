import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard";
import s from "./index.module.css";
import Skeleton from "../Skeleton";

export default function ProductsContainer({ products, limit = 'all', categoryId, filterDiscount }) {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    if (products && Array.isArray(products)) {
      let filteredProducts = products.map((product) => ({
        ...product,
        // visible: true, // Добавляем свойство visible по умолчанию
      }));;
      
      // Фильтрация по скидке
      if (filterDiscount) {
        filteredProducts = filteredProducts.filter(product => product.discont_price);
      }

      if (categoryId) {
        filteredProducts = filteredProducts.filter(product => {
          console.log("Checking product category:", product.categoryId); // Логируем categoryId каждого товара
          return product.categoryId === categoryId;
        });
        console.log("Filtered products (category):", filteredProducts);  // Логируем после фильтрации по категории
      }

      // Перемешиваем товары (для главной страницы)
    //   if (limit === 'random') {
    //     filteredProducts = filteredProducts.sort(() => Math.random() - 0.5);
    //   }

    //   // Ограничиваем количество товаров
      if (limit !== 'all') {
        filteredProducts = filteredProducts.slice(0, limit);
      }

      // Обновляем состояние после обработки
      setTimeout(() => {
        setDisplayedProducts(filteredProducts);
        setIsLoading(false); // Выключаем загрузку
      }, 1000); // Добавляем искусственную задержку для демонстрации
    }
  }, [products, limit, categoryId, filterDiscount]);

  return (
    <div className={s.container}>
      {isLoading ? (
       
          <Skeleton />
        
      ) : displayedProducts.length > 0 ? (
        displayedProducts
        .filter(el => el.visible)
        .map((product) => (
          <ProductsCard key={product.id} {...product} />
        ))
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
}