const initialState = {
    allCategoryProducts: [],
    originalCategoryProducts: [],
  };

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY'
const SORT_ALL_CATEGORIES = 'SORT_ALL_CATEGORIES'
const FILTER_DISCOUNT_PRODUCTS_BY_CATEGORY = 'FILTER_DISCOUNT_PRODUCTS_BY_CATEGORY'
const FILTER_BY_PRICE_CATEGORY = 'FILTER_BY_PRICE_CATEGORY'

export const loadProductsByCategoryAction = (products) => ({type: LOAD_PRODUCTS_BY_CATEGORY, payload: products})
export const sortAllCategoriesAction = value => ({ type: SORT_ALL_CATEGORIES, payload: value });
export const filterDiscountProductsByCategoryAction = value => ({type: FILTER_DISCOUNT_PRODUCTS_BY_CATEGORY, payload: value})
export const filterByPriceCategoryAction = values => ({type: FILTER_BY_PRICE_CATEGORY, payload: values})

export const productsByCategoryReducer = (state=initialState, action) => {
    if (action.type === LOAD_PRODUCTS_BY_CATEGORY) {
        return {
            originalCategoryProducts: action.payload.map((el) => ({ ...el, visible: true })),
            allCategoryProducts: action.payload.map((el) => ({ ...el, visible: true })),
          };
    } else if (action.type === SORT_ALL_CATEGORIES) {
        let sortedProducts = [...state.allCategoryProducts];
        if (action.payload === 'price_low-hight') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (action.payload === 'price_hight-low') {
          sortedProducts.sort((a, b) => b.price - a.price);
        } else if (action.payload === 'newest') {
          sortedProducts.sort((a, b) => new Date(b.updatedAt) - new Date(a.createdAt));
        } else if (action.payload === 'by_default') {
          sortedProducts = [...state.originalCategoryProducts];
        }
        return {
          ...state,
          allCategoryProducts: sortedProducts,
        };
      } else if (action.type === FILTER_DISCOUNT_PRODUCTS_BY_CATEGORY) {
        return {
            ...state,
            allCategoryProducts: state.originalCategoryProducts.map((el) => ({
              ...el,
              visible: action.payload ? el.discont_price !== null : true,
            })),
          };
      } else if (action.type === FILTER_BY_PRICE_CATEGORY) {
        const { minValue, maxValue } = action.payload;
        return {
        ...state,
        allCategoryProducts: state.originalCategoryProducts.map((el) => ({
        ...el,
        visible: el.price >= minValue && el.price <= maxValue ? true : false
        })),
        };
      }
      return state
}