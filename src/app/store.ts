import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/User/UserSlice';
import productsReducer from '../features/Products/productsSlice';
import categoriesReducer from '../features/Categories/categoriestSlice'
import cartReducer from '../features/Cart/cartSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer
      },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;