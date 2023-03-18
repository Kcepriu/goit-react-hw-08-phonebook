import { useSelector } from 'react-redux';
import { selectUser } from 'reduxe/auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'reduxe/auth/operation';

import { WrapUserMenu, Email } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handlerClickLogOut = () => {
    dispatch(logOut());
  };

  const user = useSelector(selectUser);
  return (
    <WrapUserMenu>
      <Email>
        e-mail: <span>{user.email}</span>
      </Email>
      <button onClick={handlerClickLogOut}>Logout</button>
    </WrapUserMenu>
  );
};

export default UserMenu;
