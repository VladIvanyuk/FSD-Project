import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IUser, userActions } from 'entity/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';

export interface ILoginByUsernameProps {
    password: string
    username: string
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string> >(
    'logn/loginByUsername',
    async (AuthData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post<IUser>('/login', AuthData);
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data))

            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)
