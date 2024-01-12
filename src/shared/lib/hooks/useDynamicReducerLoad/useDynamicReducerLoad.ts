import { IReduxStoreWithManager } from 'app/providers/StoreProvider';
import { TStateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';

export type TReducersList = {
    [name in TStateSchemaKeys]?: Reducer;
}

type ReducersListEntry = [TStateSchemaKeys, Reducer]

export const useDynamicReducerLoad = () => {
    // хук для динамического добавления/удаления редьюсеров в стор

    const store = useStore() as IReduxStoreWithManager;
    const dispatch = useAppDispatch();
    const addReducer = (reducers: TReducersList) => {
        Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
            store.reducerManager.add(key, reducer);
            dispatch({ type: `@ADD Reducer: ${key}` })
        })
    }

    const deleteReducer = (keys: TStateSchemaKeys[]) => {
        keys.forEach((key) => {
            store.reducerManager.remove(key);
            dispatch({ type: `@REMOVE Reducer: ${key}` })
        })
    }

    return {
        addReducer,
        deleteReducer
    }
}
