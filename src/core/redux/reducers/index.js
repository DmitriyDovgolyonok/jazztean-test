import {combineReducers, createStore} from "redux"
import {loginReducer} from "./loginReducer";


export const rootReducer = combineReducers({
    login: loginReducer
})
