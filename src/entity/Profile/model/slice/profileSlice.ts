import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
    isLoading: false,
    data: null,
    error: null,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
