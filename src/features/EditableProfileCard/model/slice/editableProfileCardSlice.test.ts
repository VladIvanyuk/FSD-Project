import { DeepPartial } from 'app/types/types'
import { IProfileSchema } from 'entity/Profile'
import { editableProfileCardActions, editableProfileCardReducer } from './editableProfileCardSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Countries } from 'entity/Country'
import { Currencies } from 'entity/Currency'

describe('loginSlice.test', () => {
    const data = {
        firstname: 'Влад',
        secondname: 'Иванюк',
        age: '29',
        city: 'Владивосток',
        country: Countries.Russia,
        currency: Currencies.RUB,
        username: 'admin'
    }

    test('test set readonly', () => {
        const state: DeepPartial<IProfileSchema> = {
            readonly: true
        }

        expect(editableProfileCardReducer(state as IProfileSchema, editableProfileCardActions.setReadonly(false))).toEqual({
            readonly: false
        })
    })

    test('test update profile', () => {
        const state: DeepPartial<IProfileSchema> = {
            form: {
                firstname: ''
            }
        }

        expect(editableProfileCardReducer(state as IProfileSchema, editableProfileCardActions.updateProfileForm({
            firstname: '123'
        }))).toEqual({
            form: {
                firstname: '123'
            }
        })
    })

    test('test pending status', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false
        }

        expect(editableProfileCardReducer(state as IProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true
        })
    })

    test('test fulfilled status', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true
        }

        expect(editableProfileCardReducer(state as IProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            readonly: true,
            form: data,
            data
        })
    })
})
