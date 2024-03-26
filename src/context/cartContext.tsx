import { createContext, useEffect, useReducer } from 'react';
import { cartReducer } from './cartReducer';
import { CartState } from '../interfaces/interfaces';

import {
  CLEAR_CART,
  DECREASE,
  DISPLAY_ITEMS,
  INCREASE,
  REMOVE,
} from './actions';
import { getTotals } from '../utils/functions/fns';
import supabase from '../data/supabase';

type createContextProps = {
  cartState: CartState;
  clearShoppingCart: () => void;
  removeItem: (id: string) => void;
  increaseItemAmount: (id: string) => void;
  decreaseItemAmount: (id: string) => void;
  totalCartSize: number;
  subTotal: number;
  totalIVA: number;
  total: number;
};

// context
export const CartContext = createContext<createContextProps>(
  {} as createContextProps
);

//
const INITIAL_STATE: CartState = {
  isLoading: false,
  cart: new Map(),
};

interface CartProviderProps {
  children: JSX.Element | JSX.Element[];
}

// provider
export const CartProvider = ({ children }: CartProviderProps) => {
  
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    const { data, error } = await supabase.from('items').select('*');

    if (error) {
      console.error(error);
      throw new Error('tabla "items" no pudo ser cargada');
    }

    dispatch({ type: DISPLAY_ITEMS, payload: data });
  }

  const { totalCartSize, subTotal, totalIVA, total } = getTotals(
    cartState.cart
  );

  //
  const clearShoppingCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id: string) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increaseItemAmount = (id: string) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decreaseItemAmount = (id: string) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        clearShoppingCart,
        removeItem,
        increaseItemAmount,
        decreaseItemAmount,
        totalCartSize,
        subTotal,
        totalIVA,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
