// import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

// const reducer = combineReducers({})
// const initialState = {}

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
  },
  preloadedState: {
    cart: { cartItems: cartItemsFromStorage },
  },
  middleware: [thunk],
})

export default store
