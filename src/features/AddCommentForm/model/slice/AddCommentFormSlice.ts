import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAddCommentFormSchema } from '../types/AddCommentForm'

const initialState: IAddCommentFormSchema = {
    text: '',
    error: ''
}

export const AddCommentFormSlice = createSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
})

export const { actions: AddCommentFormActions } = AddCommentFormSlice
export const { reducer: AddCommentFormReducer } = AddCommentFormSlice
