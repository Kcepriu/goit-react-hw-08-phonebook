import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'reduxe/contacts/operation';
import EditContact from 'components/EditContact/EditContact';

//mui
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { StyledTableCell, StyledTableRow } from 'constant/constantStyleTab';

const Contact = ({ contact }) => {
  const dispatcher = useDispatch();
  const [showEditWindow, setShowEditWindow] = useState(false);

  const handlerDelete = () => dispatcher(deleteContacts(contact.id));

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {contact.name}
      </StyledTableCell>

      <StyledTableCell align="left">{contact.number}</StyledTableCell>

      <StyledTableCell align="left">
        <IconButton aria-label="delete" color="primary" onClick={handlerDelete}>
          <DeleteIcon />
        </IconButton>
      </StyledTableCell>

      <StyledTableCell align="left">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => setShowEditWindow(true)}
        >
          <EditIcon />
        </IconButton>
      </StyledTableCell>
      <EditContact
        contact={contact}
        isOpen={showEditWindow}
        handlerClose={() => setShowEditWindow(false)}
      />
    </StyledTableRow>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
};

export default Contact;
