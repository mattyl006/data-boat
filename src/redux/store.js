import { configureStore } from '@reduxjs/toolkit';
import bboxesSlice from './bboxesSlice';
import rowIdsSlice from './rowIdsSlice';
import tableDataSlice from './tableDataSlice';

export default configureStore({
  reducer: {
    bboxes: bboxesSlice,
    rowIds: rowIdsSlice,
    tableData: tableDataSlice,
  },
});
