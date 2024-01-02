import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const authorizeSlice = createSlice({
  name: 'authorizeSlice',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authorizeSlice.actions;

export default authorizeSlice.reducer;
