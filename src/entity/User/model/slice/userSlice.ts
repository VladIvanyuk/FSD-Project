import { createSlice } from '@reduxjs/toolkit'
import { IUserSchema } from '../types/user';

const initialState: IUserSchema = {
    authData: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.authData = action.payload
        },
        initAuthData: (state, action) => {
            if (action.payload) {
                state.authData = JSON.parse(action.payload)
            }
        },
        logout: (state) => {
            state.authData = null;
        }
    }
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
