import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit'

// export interface ICartState {
//     id: string;
//     title: string;
//     content: string;
//     counter: number;
//     price: number;
//     totalPrice: number;
//     quantity: any
// }


const initialState: any = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingIndex: any = state.cartItems.findIndex(
              (item: any) => item.id === action.payload.id
            );
      
            if (existingIndex >= 0) {
              state.cartItems[existingIndex] = {
                ...state.cartItems[existingIndex],
                quantity: state.cartItems[existingIndex].quantity + 1,
              };
            } else {
              let tempProductItem: any = { ...action.payload, quantity: 1 };
              state.cartItems.push(tempProductItem);
            }
          },
          decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
              (item: any) => item.id === action.payload.id
            );
      
            if (state.cartItems[itemIndex].quantity > 1) {
              state.cartItems[itemIndex].quantity -= 1;

            } else if (state.cartItems[itemIndex].quantity === 1) {
              const nextCartItems = state.cartItems.filter(
                (item: any) => item.id !== action.payload.id
              );
      
              state.cartItems = nextCartItems;
            }
    
          },
          removeFromCart(state, action) {
            state.cartItems.map((cartItem: any) => {
              if (cartItem.id === action.payload.id) {
                const nextCartItems = state.cartItems.filter(
                  (item: any) => item.id !== cartItem.id
                );
      
                state.cartItems = nextCartItems;
      
              }
              return state;
            });
          },
          getTotals(state) {
            let { total, quantity } = state.cartItems.reduce(
              (cartTotal: any, cartItem: any) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += quantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
          },
          clearCart(state) {
            state.cartItems = [];
          },
    }
})
export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions
export default cartSlice.reducer
export const selectCart = (state: RootState) => state.cart