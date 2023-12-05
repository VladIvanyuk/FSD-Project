import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { IUser } from 'entity/User';

export interface ILoginByUsernameProps {
    password: string
    username: string
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps>(
    'logn/loginByUsername',
    async (AuthData, thunkApi) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', AuthData);
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue('Вы ввели неверный логин или пароль!')
        }
    }
)
