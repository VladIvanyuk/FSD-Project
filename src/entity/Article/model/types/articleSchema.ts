import { IArticle } from './article';

export interface IArticleSchema {
    error: string
    isLoading: boolean
    data?: IArticle
}
