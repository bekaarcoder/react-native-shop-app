import products from "../../data/dummy";
import { DELETE_PRODUCT } from "../types";

const initialState = {
  availableProducts: products,
  userProducts: products.filter((prod) => prod.ownerId === "admin"),
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.payload
        ),
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
