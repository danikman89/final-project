import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  sort: { name: 'популярности', sort: 'rating' },
  pageCount: 1,
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSearchValue(state, action) {
      state.search = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory, setSort, setPageCount, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
