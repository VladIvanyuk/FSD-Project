import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/StateSchema';
import { ReducersMapObject } from 'redux';
import { DeepPartial } from 'app/types/types';

interface IStoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
