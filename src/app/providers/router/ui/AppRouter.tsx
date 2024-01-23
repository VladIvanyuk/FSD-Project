import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../lib/routesConfig';
import { LoaderPage } from 'widgets/LoaderPage/ui/LoaderPage';
import { RequireAuth } from './RequireAuth';

export const AppRouter: FC = () => {
    return (
        <>
            <Suspense fallback={<LoaderPage />}>
                <Routes>
                    {routeConfig.map((el) => {
                        console.log(el.authOnly, el.path)
                        return (
                            <Route
                                key={el.path}
                                path={el.path}
                                element={
                                    <div className="page-wrapper">{
                                        !el.authOnly
                                            ? el.element
                                            : <RequireAuth>
                                                {el.element}
                                            </RequireAuth>
                                    }</div>
                                }
                            />
                        )
                    })}
                </Routes>
            </Suspense>
        </>
    );
};
