import { IReduxStoreWithManager } from 'app/providers/StoreProvider';
import { TStateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from 'redux';

export const useDynamicReducerLoad = () => {
    const store = useStore() as IReduxStoreWithManager;
    const dispatch = useDispatch();
    const addReducer = (key: TStateSchemaKeys, reducer: Reducer) => {
        store.reducerManager.add(key, reducer);
        dispatch({ type: `@ADD Reducer: ${key}` })
    }

    const deleteReducer = (key: TStateSchemaKeys) => {
        store.reducerManager.remove('loginForm');
        dispatch({ type: `@REMOVE Reducer: ${key}` })
    }

    return {
        addReducer,
        deleteReducer
    }
}
