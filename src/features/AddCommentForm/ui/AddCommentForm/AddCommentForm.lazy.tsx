import { lazy } from 'react';

export const AddCommentFormLazy = lazy(async () => await import('./AddCommentForm').then(module => ({ default: module.AddCommentForm })));
