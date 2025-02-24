const initialState = {
  allProducts: [],
  originalProducts: [],
};

const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
const SORT_ALL_PRODUCTS = "SORT_ALL_PRODUCTS";
// const SORT_PRODUCTS_BY_CATEGORY = "SORT_PRODUCTS_BY_CATEGORY";
const FILTER_DISCOUNT_PRODUCTS = "FILTER_DISCOUNT_PRODUCTS";
const FILTER_BY_PRICE_PRODUCTS = "FILTER_BY_PRICE_PRODUCTS";

export const loadAllProductsAction = (products) => ({
  type: LOAD_ALL_PRODUCTS,
  payload: products,
});
export const sortAllProductsAction = (value) => ({
  type: SORT_ALL_PRODUCTS,
  payload: value,
});
export const filterDiscountProductsAction = (value) => ({
  type: FILTER_DISCOUNT_PRODUCTS,
  payload: value,
});
export const filterByPriceProductsAction = (values) => ({
  type: FILTER_BY_PRICE_PRODUCTS,
  payload: values,
});
// export const sortProductsByCategoryAction = (value) => ({
//   type: SORT_PRODUCTS_BY_CATEGORY,
//   payload: value,
// });


export const allProductsReducer = (state = initialState, action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return {
      originalProducts: action.payload.map((el) => ({ ...el, visible: true })),
      allProducts: action.payload.map((el) => ({ ...el, visible: true })),
    };
  } else if (action.type === SORT_ALL_PRODUCTS) {
    let sortedProducts = [...state.allProducts];
    if (action.payload === 'price_low-hight') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (action.payload === 'price_hight-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (action.payload === 'newest') {
      sortedProducts.sort((a, b) => new Date(b.updatedAt) - new Date(a.createdAt));
    } else if (action.payload === 'by_default') {
      sortedProducts = [...state.originalProducts];
    }
    return {
      ...state,
      allProducts: sortedProducts,
    };
  } else if (action.type === FILTER_DISCOUNT_PRODUCTS) {
    // if (action.payload) {
      
    // } else {

    // }
    return {
      ...state,
      allProducts: state.originalProducts.map((el) => ({
        ...el,
        visible: action.payload ? el.discont_price !== null : true,
      })),
    };
  } else if (action.type === FILTER_BY_PRICE_PRODUCTS) {
    const { minValue, maxValue } = action.payload;
    return {
      ...state,
      allProducts: state.originalProducts.map((el) => ({
      ...el,
      visible: el.price >= minValue && el.price <= maxValue ? true : false
      })),
    };
  }

  return state; // Возвращаем текущее состояние по умолчанию
};


// export const allProductsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case LOAD_ALL_PRODUCTS:
//         return {
//           originalProducts: action.payload.map((el) => ({ ...el, visible: true })),
//           allProducts: action.payload.map((el) => ({ ...el, visible: true })),
//         };
  
//       case SORT_ALL_PRODUCTS:
//         let sortedProducts = [...state.allProducts];
//         if (action.payload === 'price_low-hight') {
//           sortedProducts.sort((a, b) => a.price - b.price);
//         } else if (action.payload === 'price_hight-low') {
//           sortedProducts.sort((a, b) => b.price - a.price);
//         } else if (action.payload === 'newest') {
//           sortedProducts.sort((a, b) => new Date(b.updatedAt) - new Date(a.createdAt));
//         } else if (action.payload === 'by_default') {
//           sortedProducts = [...state.originalProducts];
//         }
//         return {
//           ...state,
//           allProducts: sortedProducts,
//         };
  
//       case FILTER_DISCOUNT_PRODUCTS:
//         return {
//           ...state,
//           allProducts: state.originalProducts.map((el) => ({
//             ...el,
//             visible: action.payload ? el.discont_price !== null : true,
//           })),
//         };
  
//       case FILTER_BY_PRICE_PRODUCTS:
//         const { minValue, maxValue } = action.payload;
//         return {
//           ...state,
//           allProducts: state.originalProducts.map((el) => {
//             el.visible = el.price >= minValue && el.price <= maxValue;
//             return el;
//           }),
//         };
  
//       default:
//         return state;
//     }
//   };
  