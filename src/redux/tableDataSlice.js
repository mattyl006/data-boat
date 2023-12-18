import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableData: [],
  tableItemsChecked: [],
};

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    tableDataInit: (state, action) => {
      const data = action.payload;
      state.tableData = data;
      state.tableItemsChecked = Array(data.length).fill(false);
    },
    tableDataUpdate: (state, action) => {
      const { row, column, value } = action.payload;
      state.tableData[row][column][0] = {
        ...state.tableData[row][column][0],
        textValue: value,
      };
    },
    tableItemsCheckedUpdate: (state, action) => {
      const { i, value } = action.payload;
      state.tableItemsChecked[i] = value;
    },
  },
});

export const { tableDataInit, tableDataUpdate, tableItemsCheckedUpdate } =
  tableDataSlice.actions;

export default tableDataSlice.reducer;
