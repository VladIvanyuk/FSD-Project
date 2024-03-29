import { lazy } from 'react';

export const ArticleDetailPageLazy = lazy(async () => await import('./ArticleDetailPage').then(module => ({ default: module.ArticleDetailPage })));
