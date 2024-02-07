import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entity/Comment';

export const fetchCommentByArticleId = createAsyncThunk<IComment[], string | undefined, IThunkConfig<string> >(
    'pages/fetchCommentByArticleId',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!articleId) {
            rejectWithValue('Ошибка')
        }

        try {
            const response = await extra.api.get<IComment[]>('/comments', {
                params: {
                    articleId,
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
