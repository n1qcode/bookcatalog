import {Dispatch} from 'redux';

import BookService from '../../../../services/BookService';

import { BookActions, BookActionTypes } from './books.typings';


export const bookSearch = (data: string, index: number) => {
  return async (dispatch: Dispatch<BookActions>) => {
    try {
      dispatch({type: BookActionTypes.BOOK_START});
      const response = await BookService.search(data, index);
      dispatch({type: BookActionTypes.BOOK_SUCCESS, searchValue: data, payload: response.data});
      console.log(response.data);
      dispatch({type: BookActionTypes.BOOK_END});
    } catch (e) {
      dispatch({
        type: BookActionTypes.BOOK_ERROR,
        payload: `Error during search books: ${e}`
      });
    }
  };
};

export const bookShow = (data: number) => {
  return async (dispatch: Dispatch<BookActions>) => {
    try {
      dispatch({type: BookActionTypes.BOOK_START});
      const response = await BookService.show(data);
      dispatch({type: BookActionTypes.BOOK_SUCCESS, payload: response.data});
      console.log(response.data);
      dispatch({type: BookActionTypes.BOOK_END});
    } catch (e) {
      dispatch({
        type: BookActionTypes.BOOK_ERROR,
        payload: `Error during try to check book: ${e}`
      });
    }
  };
};