import { configureStore } from '@reduxjs/toolkit';
import bboxesSlice from './bboxesSlice';
import rowIdsSlice from './rowIdsSlice';

export default configureStore({
  reducer: {
    bboxes: bboxesSlice,
    rowIds: rowIdsSlice,
  },
});
