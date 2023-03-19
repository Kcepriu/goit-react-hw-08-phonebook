import { useDispatch } from 'react-redux';
import AddContact from 'components/AddContact/AddContact';
import ListContacts from 'components/ListContacts/ListContacts';
import Filter from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';

import { TitlePhonebook, TitleContacts, Container } from './Contacts.styled';
import { fetchAllContacts } from 'reduxe/contacts/operation';
import { useEffect } from 'react';
import useContacts from 'hooks/useContacts';

const Contacts = () => {
  const { contacts, isLoading, error } = useContacts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!error) alert('ERROR services');
  // }, [error]);

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <AddContact />

      {contacts.length > 0 && (
        <>
          <Filter />
          <TitleContacts>Contacts</TitleContacts>
          <ListContacts />
        </>
      )}

      {isLoading && !error && <Spinner />}
    </Container>
  );
};

export default Contacts;
