import { CartItem, CartState } from '../interfaces/interfaces';
import {
  CLEAR_CART,
  DISPLAY_ITEMS,
  INCREASE,
  LOADING,
  REMOVE,
  DECREASE,
} from './actions';

// actions
type CartAction =
  | { type: typeof CLEAR_CART }
  | { type: typeof INCREASE; payload: { id: string } }
  | { type: typeof DECREASE; payload: { id: string } }
  | { type: typeof REMOVE; payload: { id: string } }
  | { type: typeof LOADING; payload: boolean }
  | { type: typeof DISPLAY_ITEMS; payload: CartItem[] };

// reducer
export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: new Map(),
      };

    case REMOVE: {
      // new map to not mutate the original state
      const copyCart = new Map(state.cart);
      copyCart.delete(action.payload.id);

      return {
        ...state,
        cart: copyCart,
      };
    }

    case INCREASE: {
      // new map to not mutate the original state
      const copyCart = new Map(state.cart);

      // get id item
      const itemID = action.payload.id;

      // get item by id
      const item = copyCart.get(itemID);

      // only update if item exists
      if (item) {
        // update item amount
        const updateItem = {
          ...item,
          amount: item.amount + 1,
        };

        // update map
        copyCart.set(itemID, updateItem);
      }

      return {
        ...state,
        cart: copyCart,
      };
    }

    case DECREASE: {
      // new map to not mutate the original state
      const copyCart = new Map(state.cart);

      // get id item
      const itemID = action.payload.id;

      // get item by id
      const item = copyCart.get(itemID);

      // only update if item exists
      if (item) {
        // delete item if amount is equal to 1
        if (item.amount === 1) {
          copyCart.delete(itemID);

          return {
            ...state,
            cart: copyCart,
          };
        }

        // update item amount
        const updateItem = {
          ...item,
          amount: item.amount - 1,
        };

        // update map
        copyCart.set(itemID, updateItem);
      }

      return {
        ...state,
        cart: copyCart,
      };
    }

    case DISPLAY_ITEMS: {
      const copyCart = new Map(action.payload.map((item) => [item.id, item]));

      return {
        ...state,
        cart: copyCart,
      };
    }

    default:
      return state;
  }
};
