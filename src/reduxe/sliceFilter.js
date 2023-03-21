const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = {
  request: '',
  number: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.request = action.payload;
    },
    changeFilterNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { changeFilter, changeFilterNumber } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
