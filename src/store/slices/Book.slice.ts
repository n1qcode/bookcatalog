// NOTE: May be will use Context store instead of this

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {BookState} from '../action-creators/Books/Books.typings';

const initialState: BookState = {
  search: '',
  book: ''
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    bookSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    bookShow(state, action: PayloadAction<string>) {
      state.book = action.payload;
    }
  }
});

export default bookSlice.reducer;