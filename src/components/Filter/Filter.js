import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'reduxe/sliceFilter';

const Filter = () => {
  const dispatcher = useDispatch();

  const handlerChangeFilter = event => {
    dispatcher(changeFilter(event.currentTarget.value));
  };

  return (
    <>
      <TextField
        type="search"
        name="filter"
        variant="standard"
        fullWidth
        label="Find contact by name"
        onChange={handlerChangeFilter}
        sx={{
          maxWidth: 320,
          mt: '1rem',
          mb: '1.5rem',
        }}
      />
    </>
  );
};

export default Filter;
