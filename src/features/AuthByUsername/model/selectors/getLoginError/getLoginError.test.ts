import { IStateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'
import { DeepPartial } from 'app/types/types'

describe('getLoginError.test', () => {
    test('Should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'error'
            }
        }
        expect(getLoginError(state as IStateSchema)).toEqual('error')
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginError(state as IStateSchema)).toEqual(undefined)
    })
})
