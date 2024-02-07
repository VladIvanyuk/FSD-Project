import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { getArticleData } from 'entity/Article';
import { getUserAuthData } from 'entity/User';
import { IComment } from 'entity/Comment';
import { fetchCommentByArticleId } from '../fetchCommentByArticleId/fetchCommentByArticleId';

export interface ISendComment {
    id: string
    text: string
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const addCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string> >(
    'articleDetailsPage/addCommentForArticle',
    async (text, thunkApi) => {
        const { extra, rejectWithValue, dispatch, getState } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleData(getState());

        if (!userData || !article || !text) {
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<IComment>('/comments', {
                userId: userData.id,
                articleId: article.id,
                text
            });
            if (!response.data) {
                throw new Error()
            }

            dispatch(fetchCommentByArticleId(article.id)).catch(console.log)

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)
