import { createAsyncThunk, createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IProductState {
    id: string;
    title: string;
    content: string;
    category: string;
    reactions: any;
    favourite: any;
    price: number
}


const initialState: Array<IProductState> = [
    { id: '1', title: 'Товар #1', content: 'Описание #1', category: '0', reactions: {
        thumbsUp: 0,
        heart: 0,
    }, favourite: '🤍', price: 500 },
    { id: '2', title: 'Товар #2', content: 'Описание #2', category: '2', reactions: {
        thumbsUp: 0,
        heart: 0,
    }, favourite: '🤍', price: 600 }
]

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reactionAdded(state, action) {
            const { productId, reaction } = action.payload
            const existingProduct = state.find(product => product.id === productId)
            console.log(existingProduct)
            if (existingProduct) {
                existingProduct.reactions[reaction]++
            }
        },
        favorAdded(state, action){
            const { productId, favor } = action.payload
            const existingProduct = state.find(product => product.id === productId)
            console.log(existingProduct)
            if(existingProduct){
                existingProduct.favourite = favor
            }
        },
        productAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, categoryId, price): any {
                return {
                    payload: {
                    id: nanoid(),
                    title,
                    content,
                    category: categoryId,
                    price,
                    reactions: {
                        thumbsUp: 0,
                        heart: 0,
                    },
                    },
                }
            },
        },
        productUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingProduct = state.find(product => product.id === id)
            if (existingProduct) {
                existingProduct.title = title
                existingProduct.content = content
            }
        },
    },
});

export const { productAdded, productUpdated, reactionAdded, favorAdded } = productsSlice.actions
export const selectProducts = (state: RootState) => state.products
export default productsSlice.reducer;
