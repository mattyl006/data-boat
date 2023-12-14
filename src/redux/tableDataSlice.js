import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableData: [],
};

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    tableDataInit: (state, action) => {
      state.tableData = action.payload;
    },
    tableDataUpdate: (state, action) => {
      const { row, column, value } = action.payload;
      state.tableData[row][column][0] = {
        ...state.tableData[row][column][0],
        textValue: value,
      };
    },
  },
});

export const { tableDataInit, tableDataUpdate } = tableDataSlice.actions;

export default tableDataSlice.reducer;
