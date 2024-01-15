import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBboxes: [],
  scrollPage: 0,
  twoScreens: false,
  tableRowIds: [],
  selectedTableItem: null,
};

export const synchronizeSlice = createSlice({
  name: 'synchronizeSlice',
  initialState,
  reducers: {
    setTwoScreens: (state, action) => {
      state.twoScreens = action.payload;
    },
    onItemBlur: (state) => {
      if (state.selectedBboxes?.length) {
        state.selectedBboxes.forEach((id) => {
          const element = document.getElementById(id);
          if (element) element.classList.remove('bboxFocus');
        });
      }
      state.scrollPage = 0;
    },
    onItemFocus: (state, action) => {
      const itemValue = action.payload;
      const tableItemElements = document.getElementsByClassName('tableItem');
      if (tableItemElements?.length) {
        for (let tableItemElem of tableItemElements) {
          if (tableItemElem) {
            tableItemElem.classList.remove('tableItemFocus');
          }
        }
      }
      const newSelectedBboxes = [];
      itemValue?.forEach((bbox) => {
        const id = `bbox-${bbox.id}`;
        newSelectedBboxes.push(id);
        const element = document.getElementById(id);
        if (element) element.classList.add('bboxFocus');
      });
      state.selectedBboxes = newSelectedBboxes;
    },
    onItemClick: (state, action) => {
      const itemValue = action.payload;
      if (itemValue) {
        const pages = [
          ...new Set(
            itemValue?.map((bbox) => 'pdf-image-' + bbox.id?.split('_')[0])
          ),
        ];
        let pageId = pages[state.scrollPage];
        const element = document.getElementById(pageId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          if (state.scrollPage < pages.length - 1) {
            state.scrollPage = state.scrollPage + 1;
          } else state.scrollPage = 0;
        }
      }
    },
    addRowId: (state, action) => {
      const newRowIds = state.tableRowIds.slice();
      newRowIds.push(action.payload);
      state.tableRowIds = newRowIds;
    },
    findTableRow: (state, action) => {
      const bboxId = action.payload;
      let findedItemId = null;
      state.tableRowIds.forEach((rowIds) => {
        rowIds.forEach((itemIds) => {
          if (itemIds.includes(bboxId)) {
            findedItemId = itemIds;
          }
        });
      });
      if (findedItemId) {
        if (state.selectedTableItem) {
          const element = document.getElementById(
            `bboxes-${state.selectedTableItem}`
          );
          if (element) {
            element.classList.remove('tableItemFocus');
          }
        }
        state.selectedTableItem = findedItemId;
        const element = document.getElementById(`bboxes-${findedItemId}`);
        if (element) {
          element.classList.add('tableItemFocus');
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  },
});

export const {
  onItemBlur,
  onItemFocus,
  onItemClick,
  setTwoScreens,
  addRowId,
  findTableRow,
} = synchronizeSlice.actions;

export default synchronizeSlice.reducer;
