import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableData: [],
  tableItemsChecked: [],
  tableOpenMenuRow: [],
};

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    tableDataInit: (state, action) => {
      const data = action.payload;
      state.tableData = data;
      const initBoolVector = Array(data.length).fill(false);
      state.tableItemsChecked = initBoolVector;
      state.tableOpenMenuRow = initBoolVector;
    },
    tableDataUpdate: (state, action) => {
      const { row, column, value } = action.payload;
      state.tableData[row][column][0] = {
        ...state.tableData[row][column][0],
        textValue: value,
      };
    },
    tableDataAddNewRow: (state, action) => {
      const { row } = action.payload;
      const emptyRow = { '1st': [], '2nd': [], '3rd': [], '4th': [] };
      const newTableData = [
        ...state.tableData.slice(0, row),
        emptyRow,
        ...state.tableData.slice(row),
      ];
      state.tableData = newTableData;
    },
    tableDataDeleteRow: (state, action) => {
      const { row } = action.payload;
      const newTableData = state.tableData.slice();
      delete newTableData[row];
      state.tableData = newTableData;
    },
    tableItemsCheckedUpdate: (state, action) => {
      const { i, value } = action.payload;
      state.tableItemsChecked[i] = value;
    },
    tableOpenMenuRowUpdate: (state, action) => {
      const { i, value } = action.payload;
      let tableOpenMenuRow = Array(state.tableData.length).fill(false);
      tableOpenMenuRow[i] = value;
      state.tableOpenMenuRow = tableOpenMenuRow;
    },
  },
});

export const {
  tableDataInit,
  tableDataUpdate,
  tableDataAddNewRow,
  tableDataDeleteRow,
  tableItemsCheckedUpdate,
  tableOpenMenuRowUpdate,
} = tableDataSlice.actions;

export default tableDataSlice.reducer;
