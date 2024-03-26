/* eslint-disable prefer-const */

import { useContext } from 'react';
import { CartItem } from '../../interfaces/interfaces';
import { CartContext } from '../../context/cartContext';

export const getTotals = (cart: Map<string, CartItem>) => {
  let totalCartSize = 0;
  let subTotal = 0;
  // let totalIVA = 0;
  const IVA_RATE = 0.16;

  for (let { amount, price } of cart.values()) {
    totalCartSize += amount;
    subTotal += amount * +price;
    // totalIVA += (+price * IVA_RATE) * amount
  }

  const totalIVA = subTotal * IVA_RATE;
  const total = subTotal + totalIVA;

  return {
    totalCartSize,
    subTotal,
    totalIVA,
    total,
  };
};

//
export const useGlobalContext = () => {
  return useContext(CartContext);
};
