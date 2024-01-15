import { configureStore } from '@reduxjs/toolkit';
import bboxesSlice from './bboxesSlice';
import tableDataSlice from './tableDataSlice';
import packagesSlice from './packagesSlice';
import authorizeSlice from './authorizeSlice';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import synchronizeSlice from './synchronizeSlice';

const store = configureStore({
  reducer: {
    bboxes: bboxesSlice,
    tableData: tableDataSlice,
    packages: packagesSlice,
    authorize: authorizeSlice,
    synchronize: synchronizeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware({})),
});

initMessageListener(store);

export default store;
