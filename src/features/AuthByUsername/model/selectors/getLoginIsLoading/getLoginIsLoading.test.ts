import { IStateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'
import { DeepPartial } from 'app/types/types'

describe('getLoginIsLoading.test', () => {
    test('Should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as IStateSchema)).toEqual(true)
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginIsLoading(state as IStateSchema)).toEqual(false)
    })
})
