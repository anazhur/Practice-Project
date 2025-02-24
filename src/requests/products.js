import { loadAllProductsAction } from "../store/reducers/allProductsReducer";
import { loadDiscountedProductsAction } from "../store/reducers/discountedProductsReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";

export const getAllProducts = (dispatch) => {
    fetch('http://localhost:3333/products/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
}


export const getRandomDiscountedProducts = (products) => {
    // Фильтрация товаров со скидкой и случайный выбор 4 товаров
    if (!Array.isArray(products)) return [];
    return products
        .filter(product => product.discont_price > 0) // Оставляем только товары со скидкой
        .sort(() => Math.random() - 0.5) // Перемешиваем товары случайным образом
        .slice(0, 4); // Выбираем первые 4 товара
};

export const getDiscountedProducts = () => {
    return dispatch => {
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(json => {
                // Фильтруем товары, у которых есть discont_price
                const discountedProducts = json.filter(product => product.discont_price !== null);
                dispatch(loadDiscountedProductsAction(discountedProducts));
            })
    }
}

export const getSingleProduct = product_id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${product_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json[0])))
    }
}



