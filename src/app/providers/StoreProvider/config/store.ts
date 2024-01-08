import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { userReducer } from 'entity/User'
import { createReducerManager } from './reducerManaget'

export const createReduxStore = (initialState?: IStateSchema): any => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: true,
        preloadedState: initialState
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}
