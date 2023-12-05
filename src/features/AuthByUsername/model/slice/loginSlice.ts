import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ILoginSchema } from '../types/loginSchema'

export const initialState: ILoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
