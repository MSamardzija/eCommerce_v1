// import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer } from './reducers/productReducers'

// const reducer = combineReducers({})
// const initialState = {}

const store = configureStore({
  reducer: { productList: productListReducer },
  preloadedState: {},
  middleware: [thunk],
})

export default store
