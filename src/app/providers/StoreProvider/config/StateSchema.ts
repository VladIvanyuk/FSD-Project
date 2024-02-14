import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { IArticleSchema } from 'entity/Article';
import { IProfileSchema } from 'entity/Profile';
import { IUserSchema } from 'entity/User';
import { IAddCommentFormSchema } from 'features/AddCommentForm';
import { ILoginSchema } from 'features/AuthByUsername';
import { IArticleDetailsCommentSchema } from 'pages/ArticleDetailPage';
import { IArticlesPageSchema } from 'pages/ArticlesPage';

export interface IStateSchema {
    user: IUserSchema

    // Асинхронные релюсеры
    loginForm?: ILoginSchema
    profile?: IProfileSchema
    article?: IArticleSchema
    articleDetailsComments?: IArticleDetailsCommentSchema
    addCommentForm?: IAddCommentFormSchema
    articlesPage?: IArticlesPageSchema
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

export interface IThunkExtraArgs {
    api: AxiosInstance
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArgs
    state: IStateSchema
}
