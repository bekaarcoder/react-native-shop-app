import products from "../../data/dummy";

const initialState = {
  availableProducts: products,
  userProducts: products.filter((prod) => prod.ownerId === "admin"),
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
