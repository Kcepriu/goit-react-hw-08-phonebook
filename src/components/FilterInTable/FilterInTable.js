import { useDispatch } from 'react-redux';
import { changeFilter, changeFilterNumber } from 'reduxe/sliceFilter';

import { TextField } from '@mui/material';
import { StyledTableCell, StyledTableRow } from 'constant/constantStyleTab';

const FilterInTable = () => {
  const dispatcher = useDispatch();

  const handlerChangeFilter = event => {
    dispatcher(changeFilter(event.currentTarget.value));
  };

  const handlerChangeFilterNumber = event => {
    dispatcher(changeFilterNumber(event.currentTarget.value));
  };

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <TextField
          type="search"
          name="filter"
          variant="standard"
          fullWidth
          label="Find by name"
          onChange={handlerChangeFilter}
        />
      </StyledTableCell>

      <StyledTableCell align="left">
        <TextField
          type="search"
          name="filter"
          variant="standard"
          fullWidth
          label="Find by number"
          onChange={handlerChangeFilterNumber}
        />
      </StyledTableCell>

      <StyledTableCell align="left">-</StyledTableCell>

      <StyledTableCell align="left">-</StyledTableCell>
    </StyledTableRow>
  );
};

export default FilterInTable;
