import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProfile, IProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: IProfileSchema = {
    isLoading: false,
    data: undefined,
    form: {},
    error: undefined,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },

        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.form = {
                ...state.data,
                ...action.payload
            }
        },
        cancelUpdateProfile: (state) => {
            state.readonly = true;
            state.form = {
                ...state.data
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false;
            state.data = action.payload
            state.form = action.payload
        })
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }
})

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
