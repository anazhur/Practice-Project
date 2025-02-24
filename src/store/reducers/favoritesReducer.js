const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";

export const addToFavoritesAction = (product) => ({type:ADD_TO_FAVORITE, payload: product})

const checkFavorite = (state, payload) => {
    const targetProduct = state.find(el => el.id === payload.id)

    if(targetProduct) {
        return state.filter(el => el.id !== targetProduct.id)
    } else {
        return [...state, payload]
    }
}

const currentFavorites = JSON.parse(localStorage.getItem('favoritesList')) || [];

export const favoritesReducer = (state = currentFavorites, action) => {
    if(action.type === ADD_TO_FAVORITE) {
        return checkFavorite(state, action.payload)
    }
  return state;
};
