import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'reduxe/contacts/selectors';
import Contact from 'components/Contact/Contact';

//MUI
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { StyledTableCell } from 'constant/constantStyleTab';

const ListContacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 480 }} aria-label="customized table">
        {/* <Table aria-label="customized table"> */}
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListContacts;
