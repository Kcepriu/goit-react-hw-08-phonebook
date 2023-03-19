import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsError,
  selectIsRefresing,
  selectUser,
  selectTextError,
} from 'reduxe/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isError = useSelector(selectIsError);
  const isRefresing = useSelector(selectIsRefresing);
  const user = useSelector(selectUser);
  const textError = useSelector(selectTextError);

  return { isLoggedIn, isError, isRefresing, user, textError };
};

export default useAuth;
