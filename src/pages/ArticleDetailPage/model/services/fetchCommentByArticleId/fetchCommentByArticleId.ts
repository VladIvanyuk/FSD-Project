import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entity/Comment';

export const fetchCommentByArticleId = createAsyncThunk<IComment[], string | undefined, IThunkConfig<string> >(
    'pages/fetchCommentByArticleId',
    async (id, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!id) {
            rejectWithValue('Ошибка')
        }

        try {
            const response = await extra.api.get<IComment[]>('/comments', {
                params: {
                    id,
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
