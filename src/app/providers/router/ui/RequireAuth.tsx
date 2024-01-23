import { getUserAuthData } from 'entity/User';
import { FC } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RoutePath } from 'shared/config/route/routeConfig';

interface IRequireAuthProps {
  children: any
}

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
    const auth = useSelector(getUserAuthData)
    return auth ? children : <Navigate to={RoutePath.main} />
}
