import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: IStateSchema) => state.articlesPage?.error;
