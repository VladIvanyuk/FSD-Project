import { StoryFn } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/types';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { TReducersList } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';

const defaultAsyncReducers: TReducersList = {
    loginForm: loginReducer
}

export const StoreDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: TReducersList
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{
        ...defaultAsyncReducers,
        ...asyncReducers
    }}>
        <StoryComponent />
    </StoreProvider>
);
