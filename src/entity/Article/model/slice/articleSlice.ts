import { createSlice } from '@reduxjs/toolkit'
import { IArticleSchema } from '../types/articleSchema'

const initialState: IArticleSchema = {
    error: '',
    isLoading: false
}

export const articleSlice = createSlice({
    name: 'articleSlice',
    initialState,
    reducers: {}
})

export const { actions: articleActions } = articleSlice
export const { reducer: articleReducer } = articleSlice
