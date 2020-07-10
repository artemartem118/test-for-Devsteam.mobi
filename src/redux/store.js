import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import listReducer from './list-reducer'

const rootReducer = combineReducers({
    listScreen: listReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
