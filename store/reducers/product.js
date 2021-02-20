import products from "../../data/dummy";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../types";
import Product from "../../models/Product";

const initialState = {
  availableProducts: products,
  userProducts: products.filter((prod) => prod.ownerId === "admin"),
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "admin",
        action.payload.title,
        action.payload.author,
        action.payload.rating,
        action.payload.image,
        action.payload.price
      );
      return {
        ...state,
        availableProducts: [newProduct, ...state.availableProducts],
        userProducts: [newProduct, ...state.userProducts],
      };
    case UPDATE_PRODUCT:
      productIndex = state.userProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      const updateProduct = new Product(
        action.payload.id,
        state.userProducts[productIndex].ownerId,
        action.payload.title,
        action.payload.author,
        action.payload.rating,
        action.payload.image,
        action.payload.price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updateProduct;
      const updatedAvailableProducts = state.availableProducts.map(
        (product) => {
          if (product.id === action.payload.id) {
            return updateProduct;
          }
          return product;
        }
      );
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };
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
