import {
    PayloadAction,
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { IArticlesPageSchema } from '../types/ArticlesPageSchema'
import { ArticleListView, IArticle } from 'entity/Article'
import { fetchArticlesList } from '../services/fetchArticlesList'

export const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id
})

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,
        view: ArticleListView.LIST,
        page: 1,
        hasMore: true,
        _inited: false
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setView: (state, action: PayloadAction<ArticleListView>) => {
            localStorage.setItem('view', action.payload);
            state.view = action.payload
        },
        initState: (state) => {
            const view = localStorage.getItem('view') as ArticleListView;
            state.view = view;
            state.limit = view === ArticleListView.LIST ? 4 : 9
            state._inited = true;
        }
    },
    extraReducers (builder) {
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        builder.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
            state.isLoading = false;
            articlesAdapter.addMany(state, action.payload);
            state.hasMore = action.payload.length > 0
        })
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }
})

export const getArticles = articlesAdapter.getSelectors<IStateSchema>((state) => state.articlesPage || articlesAdapter.getInitialState())

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
