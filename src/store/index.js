import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducers';
import { allProductsReducer } from './reducers/allProductsReducer';
import { discountedProductsReducer } from './reducers/discountedProductsReducer';
import { cartReducer } from './reducers/cartReducer';
import { favoritesReducer } from './reducers/favoritesReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    allProducts: allProductsReducer,
    discountedProducts: discountedProductsReducer,
    singleProduct: singleProductReducer,
    productsByCategory: productsByCategoryReducer,
    cart: cartReducer,
    favorites: favoritesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))