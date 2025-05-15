import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearQuery: (state) => {
      state.query = '';
    },
  },
});

export const { setQuery, clearQuery } = searchbarSlice.actions;
export const selectQuery = (state) => searchbarSlice.state;

export default searchbarSlice.reducer;
