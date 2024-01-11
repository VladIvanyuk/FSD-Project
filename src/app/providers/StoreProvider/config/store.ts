import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { userReducer } from 'entity/User'
import { createReducerManager } from './reducerManaget'
import { $api } from 'shared/api/api'

export const createReduxStore = (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>
) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: true,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api
                    }
                }
            })
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
