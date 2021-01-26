import { ADD_ORDER } from "../types";
import moment from "moment";

const initialState = {
  orders: [],
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        orders: [
          ...state.orders,
          {
            id: new Date().toString(),
            items: action.payload.items,
            total: action.payload.total,
            date: new Date(),
          },
        ],
      };
    default:
      return state;
  }
};
