const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';

export const loadAllCategoriesAction = (categories) => ({
  type: LOAD_ALL_CATEGORIES,
  payload: categories,
});

export const categoriesReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_CATEGORIES) {
    return action.payload;
  }
  return state;
};

