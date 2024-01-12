import { IStateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'
import { DeepPartial } from 'app/types/types'

describe('getLoginIsLoading.test', () => {
    test('Should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'admin'
            }
        }
        expect(getLoginUsername(state as IStateSchema)).toEqual('admin')
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginUsername(state as IStateSchema)).toEqual('')
    })
})
