import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../lib/routesConfig';
import { LoaderPage } from 'widgets/LoaderPage/ui/LoaderPage';

export const AppRouter: FC = () => {
    return (
        <>
            <Suspense fallback={<LoaderPage />}>
                <Routes>
                    {routeConfig.map((el) => (
                        <Route
                            key={el.path}
                            path={el.path}
                            element={
                                <div className="page-wrapper">{el.element}</div>
                            }
                        />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
};
