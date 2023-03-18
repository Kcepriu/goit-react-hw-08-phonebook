import { useDispatch, useSelector } from 'react-redux';
import AddContact from 'components/AddContact/AddContact';
import ListContacts from 'components/ListContacts/ListContacts';
import Filter from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';

import { TitlePhonebook, TitleContacts, Container } from './Home.styled';
import { selectContacts, selectError, selectIsLoading } from 'reduxe/selectors';
import { fetchAllContacts } from 'reduxe/operation';
import { useEffect } from 'react';

const Home = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!error) alert('ERROR services');
  // }, [error]);

  return (
    <Container className="App">
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

export default Home;
