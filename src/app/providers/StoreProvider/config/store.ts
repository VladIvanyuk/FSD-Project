import { configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { counterReducer } from 'entity/Counter/model/slice/counterSlice'

export const createReduxStore = (initialState?: IStateSchema): any => configureStore<IStateSchema>({
    reducer: {
        counter: counterReducer
    },
    devTools: IS_DEV,
    preloadedState: initialState
})
