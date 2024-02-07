import {
    PayloadAction,
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { IComment } from 'entity/Comment'
import { IArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema'
import { fetchCommentByArticleId } from '../services/fetchCommentByArticleId/fetchCommentByArticleId'

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id
})

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<IArticleDetailsCommentSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined
    }),
    reducers: {},
    extraReducers (builder) {
        builder.addCase(fetchCommentByArticleId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        builder.addCase(fetchCommentByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload)
        })
        builder.addCase(fetchCommentByArticleId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }
})

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>((state) => state.articleDetailsComments || commentsAdapter.getInitialState())

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
