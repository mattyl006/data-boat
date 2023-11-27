import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bboxes: {
    0: { a: [], b: [], c: [], d: [] },
    1: { a: [], b: [], c: [], d: [] },
  },
};

export const bboxesSlice = createSlice({
  name: 'bboxes',
  initialState,
  reducers: {
    addBbox: (state, action) => {
      const { index, row } = action.payload;
      const currentRow = state.bboxes[index];
      const newA = currentRow.a;
      const newB = currentRow.b;
      const newC = currentRow.c;
      const newD = currentRow.d;
      if (row.a.length) newA.push(row.a);
      if (row.b.length) newB.push(row.b);
      if (row.c.length) newC.push(row.c);
      if (row.d.length) newD.push(row.d);
      state.bboxes[index] = { a: newA, b: newB, c: newC, d: newD };
    },
  },
});

export const { addBbox } = bboxesSlice.actions;

export default bboxesSlice.reducer;
