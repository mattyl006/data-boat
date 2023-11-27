import { configureStore } from '@reduxjs/toolkit';
import bboxesSlice from './bboxesSlice';

export default configureStore({
  reducer: {
    bboxes: bboxesSlice,
  },
});
