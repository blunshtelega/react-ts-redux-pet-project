import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Категория #1' },
    { id: '1', name: 'Категория #2' },
    { id: '2', name: 'Категория #3' },
]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlice.reducer