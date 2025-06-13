import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const searchbarSlice = createSlice({
  name: 'searchBar',
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
export const selectQuery = (state) => state.searchBar.query;

export default searchbarSlice.reducer;
