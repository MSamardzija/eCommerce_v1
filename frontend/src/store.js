import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

// const reducer = combineReducers({})
// const initialState = {}

const store = configureStore({
  reducer: {},
  preloadedState: {},
  middleware: [thunk],
})

export default store
