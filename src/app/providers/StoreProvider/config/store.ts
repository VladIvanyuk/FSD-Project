import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { counterReducer } from 'entity/Counter/model/slice/counterSlice'
import { userReducer } from 'entity/User'
import { loginReducer } from 'features/AuthByUsername'

export const createReduxStore = (initialState?: IStateSchema): any => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }
    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })
}
