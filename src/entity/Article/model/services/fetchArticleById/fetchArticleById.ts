import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string> >(
    'article/FetchArticleById',
    async (id, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<IArticle>(`/articles/${id}`);
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)
