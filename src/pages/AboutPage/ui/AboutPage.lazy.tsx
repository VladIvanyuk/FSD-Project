import { lazy } from 'react';

export const AboutPageLazy = lazy(async () => await import('./AboutPage').then(module => ({ default: module.AboutPage })));
