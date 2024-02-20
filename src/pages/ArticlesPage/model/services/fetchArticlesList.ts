import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entity/Article';
import { getArticlesPageLimit } from '../selectors/articlesPageSelectors';

interface IFetchArticlesListProps {
    page: number
}
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesListProps, IThunkConfig<string> >(
    'pages/fetchArticlesList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        const { page = 1 } = props;
        const limit = getArticlesPageLimit(thunkApi.getState())

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page

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
