import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Label } from './EditContact.styled';
import { changeContacts } from 'reduxe/contacts/operation';
import useContacts from 'hooks/useContacts';
import useNotife from 'hooks/useNotife';

const findContactByNameAndId = (contacts, userName, id) => {
  const textFilter = userName.toUpperCase();
  return contacts.find(
    element => element.name.toUpperCase() === textFilter && element.id !== id
  );
};

const EditContact = ({ contact, handlerEditionContact }) => {
  const { contacts } = useContacts();
  const { showFailure } = useNotife();

  const dispatcher = useDispatch();

  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const handlerSave = event => {
    event.preventDefault();

    if (findContactByNameAndId(contacts, newName, contact.id)) {
      showFailure(`${newName} is already in contacts`);
      return;
    }

    // dispatcher(editContact(contact.id));
    handlerEditionContact(false);
    // TODO save to API

    dispatcher(
      changeContacts({
        id: contact.id,
        contact: { name: newName, number: newNumber },
      })
    );
  };

  const onChangeName = event => {
    setNewName(event.target.value);
  };

  const onChangeNumber = event => {
    setNewNumber(event.target.value);
  };

  return (
    <Form onSubmit={handlerSave}>
      <Label htmlFor="userName">
        New name:
        <input
          type="text"
          placeholder="Enter user name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          name="name"
          value={newName}
          onChange={onChangeName}
        />
      </Label>

      <Label htmlFor="numberPhone">
        New number:
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={newNumber}
          onChange={onChangeNumber}
        />
      </Label>
      <button type="submit">Save</button>
      <button type="button" onClick={() => handlerEditionContact(false)}>
        Cancel
      </button>
    </Form>
  );
};

EditContact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
  handlerEditionContact: PropTypes.func.isRequired,
};

export default EditContact;
