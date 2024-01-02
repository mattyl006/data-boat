import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableData: [],
  tableRowsChecked: [],
  tableOpenMenuRow: [],
};

const addValueToArray = (obj, value, index) => {
  return [...obj.slice(0, index), value, ...obj.slice(index)];
};

const removeValueFromArray = (obj, index) => {
  return [...obj.slice(0, index), ...obj.slice(index + 1)];
};

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    tableDataInit: (state, action) => {
      let data = action.payload;
      action.payload.forEach((row, rowIndex) => {
        Object.keys(row).forEach((col) => {
          if (action.payload[rowIndex]) {
            data[rowIndex][col][0] = {
              ...action.payload[rowIndex][col][0],
              textValue: action.payload[rowIndex][col]
                .map((item) => item.text + ' ')
                .join(''),
            };
          }
        });
      });
      state.tableData = data;
      const initBoolVector = Array(data.length).fill(false);
      state.tableRowsChecked = initBoolVector;
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
      const newTableData = addValueToArray(state.tableData, emptyRow, row);
      const newTableRowsChecked = addValueToArray(
        state.tableRowsChecked,
        false,
        row
      );
      const newTableOpenMenuRow = addValueToArray(
        state.tableOpenMenuRow,
        false,
        row
      );
      state.tableData = newTableData;
      state.tableRowsChecked = newTableRowsChecked;
      state.tableOpenMenuRow = newTableOpenMenuRow;
    },
    tableDataDeleteRow: (state, action) => {
      const { row } = action.payload;
      const newTableData = removeValueFromArray(state.tableData, row);
      const newTableRowsChecked = removeValueFromArray(
        state.tableRowsChecked,
        row
      );
      const newTableOpenMenuRow = removeValueFromArray(
        state.tableOpenMenuRow,
        row
      );
      state.tableData = newTableData;
      state.tableRowsChecked = newTableRowsChecked;
      state.tableOpenMenuRow = newTableOpenMenuRow;
    },
    tableRowsCheckedUpdate: (state, action) => {
      const { i, value } = action.payload;
      state.tableRowsChecked[i] = value;
    },
    tableOpenMenuRowUpdate: (state, action) => {
      const { i, value } = action.payload;
      let tableOpenMenuRow = Array(state.tableData.length).fill(false);
      tableOpenMenuRow[i] = value;
      state.tableOpenMenuRow = tableOpenMenuRow;
    },
    tableRowsSwap: (state, action) => {
      const { droppedRow, droppedRowIndex, currentRowIndex } = action.payload;
      console.log(action.payload);
      const droppendTableRowChecked = state.tableRowsChecked[droppedRowIndex];
      let newTableData = removeValueFromArray(state.tableData, droppedRowIndex);
      let newTableRowsChecked = removeValueFromArray(
        state.tableRowsChecked,
        droppedRowIndex
      );
      let newTableOpenMenuRow = removeValueFromArray(
        state.tableOpenMenuRow,
        droppedRowIndex
      );
      newTableData = addValueToArray(newTableData, droppedRow, currentRowIndex);
      newTableRowsChecked = addValueToArray(
        newTableRowsChecked,
        droppendTableRowChecked,
        currentRowIndex
      );
      newTableOpenMenuRow = addValueToArray(
        newTableOpenMenuRow,
        false,
        currentRowIndex
      );
      state.tableData = newTableData;
      state.tableRowsChecked = newTableRowsChecked;
      state.tableOpenMenuRow = newTableOpenMenuRow;
      console.log(state.tableData);
    },
  },
});

export const {
  tableDataInit,
  tableDataUpdate,
  tableDataAddNewRow,
  tableDataDeleteRow,
  tableRowsCheckedUpdate,
  tableOpenMenuRowUpdate,
  tableRowsSwap,
} = tableDataSlice.actions;

export default tableDataSlice.reducer;
