import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cart";
import { OrderReducer } from "./reducers/orders";
import { productReducer } from "./reducers/product";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: OrderReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
