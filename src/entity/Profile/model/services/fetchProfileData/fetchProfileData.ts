import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export interface ILoginByUsernameProps {
    password: string
    username: string
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string> >(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<IProfile>('/profile');
            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)
