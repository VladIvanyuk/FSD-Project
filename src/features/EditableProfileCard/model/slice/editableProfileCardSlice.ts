import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProfile, IProfileSchema } from '../../../../entity/Profile/model/types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: IProfileSchema = {
    isLoading: false,
    data: undefined,
    form: {},
    error: undefined,
    readonly: true
}

export const editableProfileCardSlice = createSlice({
    name: 'editableProfileCardSlice',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },

        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
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
        builder.addCase(updateProfileData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.readonly = true;
            state.isLoading = false;
            state.data = action.payload
            state.form = action.payload
        })
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }
})

export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
