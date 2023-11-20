import { DeepPartial } from 'redux'
import { getCounter } from './getCounter'
import { IStateSchema } from 'app/providers/StoreProvider'

describe(('getCounter'), () => {
    test('should return counter', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: {
                value: 10
            }
        }
        expect(getCounter(state as IStateSchema)).toEqual({
            value: 10
        })
    })
})
