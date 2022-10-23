import {combineReducers} from 'redux';

import { bookReducer } from '../action-creators/Books/reducer';

export const rootReducer = combineReducers({
  book: bookReducer
});

export type RootState = ReturnType<typeof rootReducer>