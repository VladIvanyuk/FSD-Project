import { counterActions, counterReducer } from './counterSlice'
import { ICounterSchema } from '../types/CounterSchema'

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: ICounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.decrement)).toEqual({
            value: 9
        })
    })

    test('increment', () => {
        const state: ICounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.increment)).toEqual({
            value: 11
        })
    })
})
