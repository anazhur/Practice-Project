const defaultState = {
    state: {},
    status: 'loading'
}

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
const CHANGE_STATUS_SINGLE_PRODUCT = 'CHANGE_STATUS_SINGLE_PRODUCT';
const INCR_PRODUCT_COUNT = 'INCR_PRODUCT_COUNT';
const DECR_PRODUCT_COUNT = 'DECR_PRODUCT_COUNT';

export const loadSingleProductAction = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product})
export const changeStatusSingleProductAction = () => ({ type: CHANGE_STATUS_SINGLE_PRODUCT })
export const incrProductCountAction = () => ({ type: INCR_PRODUCT_COUNT })
export const decrProductCountAction = () => ({ type: DECR_PRODUCT_COUNT })

export const singleProductReducer = (state=defaultState, action) => {
    if (action.type === LOAD_SINGLE_PRODUCT) {
        return {
            state: {...action.payload, count: 1},
            status: 'ready'
        }
    } else if (action.type === CHANGE_STATUS_SINGLE_PRODUCT) {
        return defaultState
    } else if (action.type === INCR_PRODUCT_COUNT) {
        state.state.count++
        return {...state}
    } else if (action.type === DECR_PRODUCT_COUNT) {
        if (state.state.count > 1) {
            state.state.count--
        }
        return {...state}
    }
    return state
}