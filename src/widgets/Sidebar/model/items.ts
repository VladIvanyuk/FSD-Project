import { AboutIcon, ArticlesIcon, MainIcon, ProfileIcon } from 'shared/assets'
import { RoutePath } from 'shared/config/route/routeConfig'

export interface ISidebarItem {
    path: string
    text: string
    Icon: any
    authOnly: boolean
}

export const SidebarItemsList: ISidebarItem[] = [
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
    },
    {
        path: RoutePath.profile,
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

]
