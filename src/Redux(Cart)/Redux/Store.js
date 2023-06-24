import { applyMiddleware, combineReducers, createStore } from "redux";
import { productlist } from "./Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
 

const rootReducer =combineReducers({
    productdata:productlist,
})
export const store = createStore(rootReducer ,{} ,composeWithDevTools(applyMiddleware(thunk)))