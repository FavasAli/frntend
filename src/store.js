import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { registerUserReducer, loginUserReducer } from "./reducers/userReducers"

const reducer = combineReducers({
  registerUser: registerUserReducer,
  loginUser: loginUserReducer,
})

const midleware = [thunk]

const userInfoFromLocalStarage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : []

const initialise = {
  loginUser: userInfoFromLocalStarage,
}

const store = createStore(reducer,initialise, applyMiddleware(...midleware))

export default store
