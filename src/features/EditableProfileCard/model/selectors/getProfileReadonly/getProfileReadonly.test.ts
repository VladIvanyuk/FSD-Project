import { IStateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types/types'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly.test', () => {
    test('Should return profile data', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                readonly: true
            }
        }
        expect(getProfileReadonly(state as IStateSchema)).toEqual(true)
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileReadonly(state as IStateSchema)).toEqual(undefined)
    })
})
