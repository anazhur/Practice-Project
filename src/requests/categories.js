import { loadAllCategoriesAction, loadCategoryAction } from "../store/reducers/categoriesReducers"


export const getAllCategories = dispatch => {
    fetch('http://localhost:3333/categories/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllCategoriesAction(json)))
}

export const fetchCategoryProducts = (categoryId) => async (dispatch) => {
    dispatch({ type: 'FETCH_CATEGORY_PRODUCTS_REQUEST' });
  
    try {
      const response = await fetch(`http://localhost:3333/categories/${categoryId}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const data = await response.json();
      dispatch({
        type: 'FETCH_CATEGORY_PRODUCTS_SUCCESS',
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_CATEGORY_PRODUCTS_FAILURE',
        payload: error.message,
      });
    }
  };
  
