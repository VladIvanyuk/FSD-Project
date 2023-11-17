import { configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'

export const createReduxStore = (initialState?: IStateSchema): any => configureStore<IStateSchema>({
    reducer: {},
    devTools: IS_DEV,
    preloadedState: initialState
})
