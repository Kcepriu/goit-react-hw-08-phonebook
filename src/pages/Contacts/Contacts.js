import { useDispatch } from 'react-redux';
import AddContact from 'components/AddContact/AddContact';
import ListContacts from 'components/ListContacts/ListContacts';
// import Filter from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';

import { fetchAllContacts } from 'reduxe/contacts/operation';
import { useEffect } from 'react';
import useContacts from 'hooks/useContacts';

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Contacts = () => {
  const { contacts, isLoading, error } = useContacts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Typography variant="h3">Phonebook</Typography>

      <AddContact />

      {contacts.length > 0 && (
        <>
          <Typography variant="h4">Contacts</Typography>

          {/* <Filter /> */}

          <ListContacts />
        </>
      )}

      {isLoading && !error && <Spinner />}
    </Box>
  );
};

export default Contacts;
