import { EntityState } from '@reduxjs/toolkit';
import { IComment } from 'entity/Comment';

export interface IArticleDetailsCommentSchema extends EntityState<IComment> {
    isLoading?: boolean
    error?: string
}
