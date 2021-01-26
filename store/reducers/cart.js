import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const initialState = {
  items: [],
  cartTotal: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = action.payload;
      const newCartItems = state.items.find((item) => item.id === addedItem.id)
        ? state.items.map((item) =>
            item.id === addedItem.id
              ? { ...addedItem, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { ...addedItem, quantity: 1 }];
      return {
        ...state,
        items: newCartItems,
        cartTotal: newCartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    case REMOVE_FROM_CART: {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: updatedItems,
        cartTotal: updatedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    }
    default:
      return state;
  }
};
