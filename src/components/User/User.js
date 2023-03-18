import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'reduxe/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { UserName, WrapUser, ForUserMenu } from './User.styled';
const User = () => {
  const user = useSelector(selectUser);
  const [showLogOut, setShowLogOut] = useState(false);

  const handlerClick = () => {
    console.log('handlerClick');

    setShowLogOut(prev => !prev);
  };
  return (
    <WrapUser>
      <UserName onClick={handlerClick}>{user.name}</UserName>
      <ForUserMenu>{showLogOut && <UserMenu />}</ForUserMenu>
    </WrapUser>
  );
};

export default User;
