import User from 'components/User/User';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'reduxe/auth/selectors';
import { WrapFooter } from './Footer.styled';

const Footer = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <WrapFooter>
      <NavLink to="/contacts">Contacts</NavLink>

      {!isLoggedIn && (
        <div>
          <NavLink to="/login">LogIn</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}

      {isLoggedIn && <User />}
    </WrapFooter>
  );
};

export default Footer;
