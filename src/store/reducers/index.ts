import {combineReducers} from 'redux';

import {bookApi} from '../api/book.api';
import bookReducer from '../slices/Book.slice';

export const rootReducer = combineReducers({
  bookReducer,
  [bookApi.reducerPath]: bookApi.reducer
});
