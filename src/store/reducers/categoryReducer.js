const initialState = {
  category: null,
  products: [],
  loading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORY_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_CATEGORY_SUCCESS':
      return {
        ...state,
        loading: false,
        category: action.payload.category,
        products: action.payload.products,
      };
    case 'FETCH_CATEGORY_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};