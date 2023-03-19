import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const { isLoggedIn, isRefresing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefresing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
