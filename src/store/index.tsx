import { configureStore, createSlice } from "@reduxjs/toolkit";

interface listItemType {
  [key: string]: any;
}
export interface storeType {
  list: listItemType[];
}

const initialListState: listItemType = [];

const listSlice = createSlice({
  name: "locale",
  initialState: initialListState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
  },
});

const store = configureStore({
  reducer: listSlice.reducer,
});

export const listActions = listSlice.actions;
export default store;
