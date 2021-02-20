import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../types";

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const createProduct = (title, author, image, rating, price) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      title,
      author,
      image,
      rating,
      price,
    },
  };
};

export const updateProduct = (id, title, author, image, rating, price) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      id,
      title,
      author,
      image,
      rating,
      price,
    },
  };
};
