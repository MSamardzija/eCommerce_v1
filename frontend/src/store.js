// import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

// const reducer = combineReducers({})
// const initialState = {}

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
    userLogin: userLoginReducer,
  },
  preloadedState: {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
  },
  middleware: [thunk],
})

export default store
