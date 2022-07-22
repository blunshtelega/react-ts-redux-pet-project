import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserState {
    firstName: string
    lastName: string
    isAuth: boolean
    isAdmin: boolean
}

const initialState: UserState = {
    firstName: 'Default state firstName',
    lastName: 'Default state lastName',
    isAuth: true,
    isAdmin: true
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            const newBoolean = action.payload
            state.isAuth = newBoolean;
        }
    },
});

export const { setIsAuth } = userSlice.actions;
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer;
