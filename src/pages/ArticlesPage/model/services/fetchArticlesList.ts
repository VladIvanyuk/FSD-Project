import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entity/Article';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<IArticle[], void, IThunkConfig<string> >(
    'pages/fetchArticlesList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user'
                }
            });
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)
