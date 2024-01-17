import { lazy } from 'react';

export const ProfilePageLazy = lazy(async () => await import('../../../features/EditableProfileCard/model/selectors/ProfilePage').then(module => ({ default: module.ProfilePage })));
