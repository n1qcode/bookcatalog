import {combineReducers} from 'redux';

import { bookReducer } from './Book';

export const rootReducer = combineReducers({
  book: bookReducer
});

export type RootState = ReturnType<typeof rootReducer>