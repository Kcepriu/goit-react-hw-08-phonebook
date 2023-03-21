import { useSelector } from 'react-redux';
import { selectUser } from 'reduxe/auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'reduxe/auth/operation';

//MUI
import {
  Dialog,
  Button,
  Typography,
  Box,
  DialogTitle,
  Avatar,
} from '@mui/material';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';

import { blue } from '@mui/material/colors';

const UserMenu = ({ isOpen, handlerClose }) => {
  const dispatch = useDispatch();

  const handlerClickLogOut = () => {
    dispatch(logOut());
  };

  const user = useSelector(selectUser);
  return (
    <Dialog maxWidth="lg" open={isOpen} onClose={handlerClose} sx={{ p: 2 }}>
      <DialogTitle variant="h4">Registered user:</DialogTitle>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
            <PersonOutlineIcon />
          </Avatar>

          <Typography variant="h5" component="p" color="black">
            {user.name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
            <EmailIcon />
          </Avatar>

          <Typography variant="h5" component="p" color="black">
            {user.email}
          </Typography>
        </Box>

        <Box
          m={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          // sx={boxDefault}
        >
          <Button
            type="buttom"
            variant="contained"
            sx={{ mt: 3, mb: 2, maxWidth: 80 }}
            onClick={handlerClickLogOut}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default UserMenu;
