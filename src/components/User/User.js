import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'reduxe/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

//MUI
import { Avatar, Typography, Box } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const User = () => {
  const user = useSelector(selectUser);
  const [showLogOut, setShowLogOut] = useState(false);

  const handlerClick = () => {
    setShowLogOut(prev => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        onClick={handlerClick}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonOutlineIcon />
        </Avatar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {user.name}
        </Typography>
      </Box>

      <UserMenu isOpen={showLogOut} handlerClose={() => setShowLogOut(false)} />
    </Box>
  );
};

export default User;
