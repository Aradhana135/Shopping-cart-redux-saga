import * as actionTypes from "./types";
import { INITIAL_STATE } from "./constData";

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //check if items is in cart already
      const { id, allProducts } = action.payload;
      const item = allProducts.find((prod) => prod.id === id);
      const isItemExist =
        state.products.filter((prod) => prod.id === id).length > 0
          ? true
          : false;
      return {
        ...state,
        currentItem: item,
        products: isItemExist
          ? state.products.map((prod) =>
              prod.id === id ? { ...prod, qty: prod.qty + 1 } : prod
            )
          : [...state.products, { ...item, qty: 1 }],
      };
  
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? {...item, qty: action.payload.qty++ }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
  
    default:
      return state;
  }
};
export default shopReducer;
