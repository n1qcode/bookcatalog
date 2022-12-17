// NOTE code that was commented is old version, that is existing just for example

// import {applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';

import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {bookApi} from './api/book.api';
import {rootReducer} from './reducers';
import loggingMiddleware from './middleware';

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bookApi.middleware, loggingMiddleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
