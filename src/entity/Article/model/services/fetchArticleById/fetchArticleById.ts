import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { userActions } from 'entity/User';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string> >(
    'article/FetchArticleById',
    async (id, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<IArticle>(`/articles/${id}`);
            if (!response.data) {
                throw new Error()
            }

            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)
