import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'reduxe/contacts/selectors';
const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return { contacts, isLoading, error };
};

export default useContacts;
