import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { IProfileSchema } from 'entity/Profile';
import { IUserSchema } from 'entity/User';
import { ILoginSchema } from 'features/AuthByUsername';

export interface IStateSchema {
    user: IUserSchema

    // Асинхронные релюсеры
    loginForm?: ILoginSchema
    profile: IProfileSchema
}

export type TStateSchemaKeys = keyof IStateSchema;

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: TStateSchemaKeys, reducer: Reducer) => void
    remove: (key: TStateSchemaKeys) => void
}
