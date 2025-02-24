const LOAD_DISCOUNTED_PRODUCTS = 'LOAD_DISCOUNTED_PRODUCTS'
// const FILTER_DISCOUNT_PRODUCTS = 'FILTER_DISCOUNT_PRODUCTS'
const SORT_ALL_DISCOUNTED_PRODUCTS = 'SORT_ALL_DISCOUNTED_PRODUCTS'
const FILTER_BY_PRICE_DISCOUNTED_PRODUCTS = 'FILTER_BY_PRICE_DISCOUNTED_PRODUCTS'

export const loadDiscountedProductsAction = discountProducts => ({type: LOAD_DISCOUNTED_PRODUCTS, payload: discountProducts});
// export const filterDiscountProductsAction = value => ({type: FILTER_DISCOUNT_PRODUCTS, payload: value})
export const sortAllDiscountedProductsAction = value => ({type: SORT_ALL_DISCOUNTED_PRODUCTS, payload: value})
export const filterByPriceDiscountedProductsAction = values => ({type: FILTER_BY_PRICE_DISCOUNTED_PRODUCTS, payload: values})

export const discountedProductsReducer = (state=[], action) => {

    if (action.type === LOAD_DISCOUNTED_PRODUCTS) {
        return action.payload.map(el => ({...el, visible: true}))}
     else if (action.type === SORT_ALL_DISCOUNTED_PRODUCTS) {
        if (action.payload === 'price_low-hight') {
            return state.slice().sort((a, b) => a.discont_price - b.discont_price)
        } else if (action.payload === 'price_hight-low') {
            return state.slice().sort((a, b) => b.discont_price - a.discont_price)
        } else if (action.payload === 'newest') {
            return state.sort((a, b) => new Date(b.updateAt) - new Date(a.createAt))
        } else if (action.payload === 'by_default') {
            return state
        }
    } else if (action.type === FILTER_BY_PRICE_DISCOUNTED_PRODUCTS) {
        const {minValue, maxValue} = action.payload
        state.map(el => {
            el.visible = el.discont_price >= minValue && el.discont_price <= maxValue ? true : false
            return el
        })
        return [...state]
    }
    
    //  else if (action.type === FILTER_DISCOUNT_PRODUCTS) {
    //     if (action.payload) {
    //         state.map( el => {
    //             if (el.discont_price < 0) {
    //                 el.visible = false
    //             }
    //             return el
    //         })
    //     } else {
    //         state.map(el => {
    //             el.visible = true
    //             return el
    //         })
    //     }
    //     return [...state]
            
        
    // }
    return state
}