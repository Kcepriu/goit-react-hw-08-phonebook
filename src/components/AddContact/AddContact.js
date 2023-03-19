import { useDispatch } from 'react-redux';
import { addContacts } from 'reduxe/contacts/operation';
import { Form, Label, Button } from './AddContact.styled';
import useContacts from 'hooks/useContacts';
import useNotife from 'hooks/useNotife';

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
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="userName">
          Name
          <input
            type="text"
            placeholder="Enter user name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            name="name"
          />
        </Label>

        <Label htmlFor="numberPhone">
          Number
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

export default AddContact;
