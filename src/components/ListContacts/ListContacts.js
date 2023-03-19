import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'reduxe/contacts/selectors';

import { ContactList } from './ListContacts.styled';
import ContactProxy from 'components/ContactProxy/ContactProxy';

const ListContacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactList>
      {visibleContacts.map(contact => {
        return <ContactProxy key={contact.id} contact={contact} />;
      })}
    </ContactList>
  );
};

export default ListContacts;
