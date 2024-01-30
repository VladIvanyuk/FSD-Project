import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { IComment } from 'entity/Comment'
import { IArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema'

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id
})

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<IArticleDetailsCommentSchema>({
        ids: ['1', '2'],
        entities: {
            1: {
                id: '1',
                text: 'comment 1',
                user: {
                    id: '1',
                    username: '1'
                }
            },
            2: {
                id: '2',
                text: 'comment 2',
                user: {
                    id: '2',
                    username: '2'
                }
            }
        },
        isLoading: false,
        error: undefined
    }),
    reducers: {}
})

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>((state) => state.articleDetailsComments || commentsAdapter.getInitialState())

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
