import { useDispatch } from 'react-redux';
import { addContacts } from 'reduxe/contacts/operation';
import useContacts from 'hooks/useContacts';
import useNotife from 'hooks/useNotife';

//MUI
import { Button, Box, TextField } from '@mui/material';

const findContactByName = (contacts, userName) => {
  const textFilter = userName.toUpperCase();
  return contacts.find(element => element.name.toUpperCase() === textFilter);
};

const AddContact = () => {
  const { contacts } = useContacts();
  const { showFailure } = useNotife();

  const dispatcher = useDispatch();

  const addnewContact = (contacts, newContact) => {
    if (findContactByName(contacts, newContact.name)) {
      showFailure(`${newContact.name} is already in contacts`);
      return;
    }

    dispatcher(addContacts(newContact));

    return true;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const newContact = {
      name: form.elements.name.value,
      number: form.elements.phone.value,
    };

    addnewContact(contacts, newContact) && form.reset();
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        // Validate
        sx={{
          mt: 1,
          maxWidth: 480,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          inputProps={{
            inputMode: 'text',
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          id="name"
          label="User name"
          name="name"
          autoComplete="name"
          autoFocus
          // helperText="Некоректне імʼя."
        />
        <TextField
          margin="normal"
          required
          fullWidth
          inputProps={{
            inputMode: 'text',
            pattern: String.raw`\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}`,
          }}
          name="phone"
          label="Phone number"
          type="phone"
          id="phone"
          // error
          // helperText="Некоректний номер телефону."
        />
        <Box
          m={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          // sx={boxDefault}
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              maxWidth: 240,
            }}
          >
            Add new contact
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddContact;
