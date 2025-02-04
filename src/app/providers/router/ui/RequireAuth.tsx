import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} />;
  }

  return children;
};
