import { DeepPartial } from 'app/types/types'
import { ILoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = {
            username: '123'
        }

        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('admin'))).toEqual({
            username: 'admin'
        })
    })

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = {
            password: '111'
        }

        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('222'))).toEqual({
            password: '222'
        })
    })
})
