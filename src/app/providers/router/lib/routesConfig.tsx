import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/route/routeConfig';

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />
    }
]
