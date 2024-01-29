import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticleIsLoading = (state: IStateSchema) => state.article?.isLoading;
export const getArticleError = (state: IStateSchema) => state.article?.error;
export const getArticleData = (state: IStateSchema) => state.article?.data;
