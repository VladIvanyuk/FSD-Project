import { createSlice } from '@reduxjs/toolkit'
import { IArticleSchema } from '../types/articleSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'

export const initialState: IArticleSchema = {
    error: undefined,
    isLoading: false,
    data: undefined
}

export const articleSlice = createSlice({
    name: 'articleSlice',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder.addCase(fetchArticleById.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
        })
        builder.addCase(fetchArticleById.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false;
        })
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }
})

export const { actions: articleActions } = articleSlice
export const { reducer: articleReducer } = articleSlice
