import { AboutIcon, MainIcon, ProfileIcon } from 'shared/assets'
import { RoutePath } from 'shared/config/route/routeConfig'

export interface ISidebarItem {
    path: string
    text: string
    Icon: any
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon

    },
    {
        path: RoutePath.about,
        text: 'О нас',
        Icon: AboutIcon

    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon

    }

]
