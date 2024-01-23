import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/route/routeConfig';

interface IRouteConfigProps extends RouteProps {
    authOnly: boolean
}

export const routeConfig: IRouteConfigProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
        authOnly: false
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
        authOnly: false
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage />,
        authOnly: true
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
        authOnly: false
    }
]
