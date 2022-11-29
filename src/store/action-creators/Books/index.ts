// NOTE: this is old version, that is existing just for example

import {Dispatch} from 'redux';

import {BookActions, BookActionTypes, BookSearchResponse, BookShowResponse} from './Books.typings';

export const book = (data: string, fn: (arg: string) => Promise<Response>) => {
  return async (dispatch: Dispatch<BookActions>) => {
    try {
      dispatch({type: BookActionTypes.BOOK_START});
      const response = await fn(data);
      const books: BookSearchResponse | BookShowResponse = await response.json();
      console.log('Book info:', books);
      dispatch({type: BookActionTypes.BOOK_SUCCESS, payload: books});
    } catch (error) {
      const errorMes = 'Error into book action-creator function:';
      dispatch({
        type: BookActionTypes.BOOK_ERROR,
        error: `${errorMes} ${error}`
      });
      console.log(errorMes, error);
    }
  };
};
