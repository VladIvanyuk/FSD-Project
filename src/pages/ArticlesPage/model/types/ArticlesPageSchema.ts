import { EntityState } from '@reduxjs/toolkit';
import { IArticle, ArticleListView } from 'entity/Article';

export interface IArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
    view: ArticleListView
    // pagination
    page: number
    limit?: number
    hasMore: boolean
}
