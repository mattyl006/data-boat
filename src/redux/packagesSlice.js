import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  packages: null,
  page: null,
};

export const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    packagesInit: (state, action) => {
      state.packages = action.payload;
      state.page = 1;
    },
    increasePage: (state) => {
      console.log(state.packages.length);
      if (state.page < state.packages) {
        state.page = state.page + 1;
      }
    },
    decreasePage: (state) => {
      if (state.page - 1 > 0) {
        state.page = state.page - 1;
      }
    },
  },
});

export const { packagesInit, increasePage, decreasePage } =
  packagesSlice.actions;

export default packagesSlice.reducer;
