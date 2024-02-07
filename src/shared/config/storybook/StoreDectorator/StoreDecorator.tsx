import { StoryFn } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/types';
import { articleReducer } from 'entity/Article';
import { AddCommentFormReducer } from 'features/AddCommentForm/model/slice/AddCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { editableProfileCardReducer } from 'features/EditableProfileCard';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailPage/model/slice/articleDetailsCommentsSlice';
import { TReducersList } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';

const defaultAsyncReducers: TReducersList = {
    loginForm: loginReducer,
    profile: editableProfileCardReducer,
    article: articleReducer,
    addCommentForm: AddCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer
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
