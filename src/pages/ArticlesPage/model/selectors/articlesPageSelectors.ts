import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: IStateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: IStateSchema) => state.articlesPage?.view;
export const getArticlesPageLimit = (state: IStateSchema) => state.articlesPage?.limit;
export const getArticlesPageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageNum = (state: IStateSchema) => state.articlesPage?.page || 1;
