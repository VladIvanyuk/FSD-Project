import { IStateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types/types'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
    test('Should return profile data', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                error: '123'
            }
        }
        expect(getProfileError(state as IStateSchema)).toEqual('123')
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileError(state as IStateSchema)).toEqual(undefined)
    })
})
