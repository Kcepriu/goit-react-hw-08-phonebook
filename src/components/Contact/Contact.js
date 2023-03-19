import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { WrapContact } from './Contact.styled';

import { deleteContacts } from 'reduxe/contacts/operation';

const Contact = ({ contact, handlerEditionContact }) => {
  const dispatcher = useDispatch();

  const handlerDelete = () => dispatcher(deleteContacts(contact.id));

  return (
    <WrapContact>
      {contact.name}: {contact.number}
      <button type="button" onClick={handlerDelete}>
        Delete
      </button>
      <button type="button" onClick={() => handlerEditionContact(true)}>
        Edit
      </button>
    </WrapContact>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
  handlerEditionContact: PropTypes.func.isRequired,
};

export default Contact;
