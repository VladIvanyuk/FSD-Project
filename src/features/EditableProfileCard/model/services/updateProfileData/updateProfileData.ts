import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from 'entity/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string> >(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)
