import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { userReducer } from 'entity/User'
import { loginReducer } from 'features/AuthByUsername'

export const createReduxStore = (initialState?: IStateSchema): any => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer,
        loginForm: loginReducer
    }
    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })
}
