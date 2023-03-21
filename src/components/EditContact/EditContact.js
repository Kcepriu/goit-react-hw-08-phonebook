import { useDispatch } from 'react-redux';
import { changeContacts } from 'reduxe/contacts/operation';
import useContacts from 'hooks/useContacts';
import useNotife from 'hooks/useNotife';

//MUI
import { Button, Box, TextField, Dialog, DialogTitle } from '@mui/material';

const findContactByNameAndId = (contacts, userName, id) => {
  const textFilter = userName.toUpperCase();
  return contacts.find(
    element => element.name.toUpperCase() === textFilter && element.id !== id
  );
};

const EditContact = ({ contact, isOpen, handlerClose }) => {
  const { contacts } = useContacts();
  const { showFailure } = useNotife();

  const dispatcher = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const newContact = {
      name: form.elements.name.value,
      number: form.elements.phone.value,
    };

    if (findContactByNameAndId(contacts, newContact.name, contact.id)) {
      showFailure(`${newContact.name} is already in contacts`);
      return;
    }

    dispatcher(
      changeContacts({
        id: contact.id,
        contact: newContact,
      })
    );

    handlerClose();
  };

  return (
    <Dialog maxWidth="lg" open={isOpen} onClose={handlerClose} sx={{ p: 2 }}>
      <DialogTitle variant="h4">Edit contact:</DialogTitle>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          maxWidth: 480,
          p: 2,
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
          defaultValue={contact.name}
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
          defaultValue={contact.number}
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
            Save contact
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              maxWidth: 240,
            }}
            onClick={handlerClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default EditContact;
