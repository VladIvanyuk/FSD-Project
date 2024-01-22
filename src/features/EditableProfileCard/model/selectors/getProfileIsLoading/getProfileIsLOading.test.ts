import { IStateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types/types'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading.test', () => {
    test('Should return profile data', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(true)
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined)
    })
})
