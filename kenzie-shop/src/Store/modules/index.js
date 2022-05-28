import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

// também adicionamos o thunk 
import thunk from "redux-thunk";

import cartReducer from './cart/reducer'

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
