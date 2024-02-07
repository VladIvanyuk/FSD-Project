import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entity/User';
import { AboutIcon, ArticlesIcon, MainIcon, ProfileIcon } from 'shared/assets';
import { RoutePath } from 'shared/config/route/routeConfig';
import { ISidebarItem } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: ISidebarItem[] = [
        {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon,
            authOnly: false
        },
        {
            path: RoutePath.about,
            text: 'О нас',
            Icon: AboutIcon,
            authOnly: false
        }
    ]

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData?.id,
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticlesIcon,
                authOnly: true
            }
        )
    }

    return sidebarItemsList
})
