import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "./Pages/MainPage";
import { useEffect, useState } from "react";
import { getAllCategories } from "./requests/categories";
import {
  getAllProducts,
  getDiscountedProducts,
  getRandomDiscountedProducts,
} from "./requests/products";
import CategoriesPage from "./Pages/CategoriesPage";
import AllProductsPage from "./Pages/AllProductsPage";
import ProductsByCategoryPage from "./Pages/ProductByCategoryPage";
import SingleProductPage from "./Pages/SingleProductPage";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";
import DiscountedProductPage from "./Pages/DiscountedProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoritesPage from "./Pages/FavoritesPage";
import ModalWindow from "./components/ModalWindow";
import { Context } from './context';

function App() {
  const dispatch = useDispatch();

  const [ modalActive, setModalActive ] = useState(false);

  const favoriteState = useSelector(store => store.favorites);
  const cartState = useSelector(store => store.cart);

  useEffect(() => {
    dispatch(getAllCategories);
    dispatch(getAllProducts);
    dispatch(getDiscountedProducts);
    dispatch(getRandomDiscountedProducts);
  }, []);

  useEffect(() => localStorage.setItem('favoritesList', JSON.stringify(favoriteState)), [favoriteState]);

  useEffect(() => localStorage.setItem('cartList', JSON.stringify(cartState)), [cartState]);

  return (
    <div>
      <Context.Provider value={{ modalActive, setModalActive }}>
        <ModalWindow/>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/all_products" element={<AllProductsPage />} />
          <Route path="/all_sales" element={<DiscountedProductPage />} />
          <Route path="/categories/:id" element={<ProductsByCategoryPage />} />
          <Route path="/products/:product_id" element={<SingleProductPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
