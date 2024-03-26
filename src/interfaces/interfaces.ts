import { type Database } from '../data/types';

type ItemsEntity = Database['public']['Tables']['items']['Row'];

export type CartItem = ItemsEntity;

export interface CartState {
  isLoading: boolean;
  cart: Map<string, CartItem>;
}
