import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { IUser, userActions } from 'entity/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';

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

            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data))

            thunkApi.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue('Вы ввели неверный логин или пароль!')
        }
    }
)
