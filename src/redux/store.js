import { configureStore } from '@reduxjs/toolkit';
import bboxesSlice from './bboxesSlice';
import rowIdsSlice from './rowIdsSlice';
import tableDataSlice from './tableDataSlice';
import packagesSlice from './packagesSlice';

export default configureStore({
  reducer: {
    bboxes: bboxesSlice,
    rowIds: rowIdsSlice,
    tableData: tableDataSlice,
    packages: packagesSlice,
  },
});
