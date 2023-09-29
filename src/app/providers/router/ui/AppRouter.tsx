import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../lib/routesConfig';

export const AppRouter: FC = () => {
  return (
      <>
          <Suspense fallback="Loading...">
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
