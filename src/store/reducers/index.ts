import {combineReducers} from 'redux';

import {bookSearchReducer} from './Book/BookSearchReducer';
import {bookShowReducer} from './Book/BookShowReducer';

export const rootReducer = combineReducers({
  bookSearch: bookSearchReducer,
  bookShow: bookShowReducer
});
