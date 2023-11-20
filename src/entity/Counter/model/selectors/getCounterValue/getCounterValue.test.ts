import { DeepPartial } from 'redux'
import { getCounterValue } from './getCounterValue'
import { IStateSchema } from 'app/providers/StoreProvider'

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: {
                value: 10
            }
        }
        expect(getCounterValue(state as IStateSchema)).toEqual(10)
    })
})
