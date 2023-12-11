import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rowIds: [],
};

export const rowIdsSlice = createSlice({
  name: 'rowIds',
  initialState,
  reducers: {
    addRowId: (state, action) => {
      const newRowIds = state.rowIds.slice();
      newRowIds.push(action.payload);
      state.rowIds = newRowIds;
    },
  },
});

export const { addRowId } = rowIdsSlice.actions;

export default rowIdsSlice.reducer;
