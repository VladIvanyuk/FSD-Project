import { classNames } from '../helpers/classNames/classNames';
import { useTheme } from 'shared/config/themeContext';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { FC, Suspense, useEffect } from 'react';
import { userActions } from 'entity/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const user = localStorage.getItem(LOCALSTORAGE_USER_KEY);
        dispatch(userActions.initAuthData(user))
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <div className='modal'></div>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
