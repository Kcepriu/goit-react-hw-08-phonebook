import User from 'components/User/User';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'reduxe/auth/selectors';
// import { WrapFooter } from './Footer.styled';

//
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          {isLoggedIn && <User />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
