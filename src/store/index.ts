import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from './reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
