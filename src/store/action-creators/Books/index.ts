import {Dispatch} from 'redux';

import BookService from '../../../services/BookService';

import { BookActions, BookActionTypes } from './Books.typings';


export const bookSearch = (data: string, index: number) => {
  return async (dispatch: Dispatch<BookActions>) => {
    try {
      dispatch({type: BookActionTypes.BOOK_START});
      const response = await BookService.search(data, index);
      const books = await response.json();
      console.log('Found books info:', books);
      dispatch({type: BookActionTypes.BOOK_SUCCESS, payload: books});
      dispatch({type: BookActionTypes.BOOK_END});
    } catch (error) {
      const errorMes = 'Error during search books:';
      dispatch({
        type: BookActionTypes.BOOK_ERROR,
        payload: `${errorMes} ${error}`
      });
      console.log(errorMes, error);
    }
  };
};

export const bookShow = (data: number) => {
  return async (dispatch: Dispatch<BookActions>) => {
    try {
      dispatch({type: BookActionTypes.BOOK_START});
      const response = await BookService.show(data);
      const book = await response.json();
      console.log('Selected book info:', book);
      dispatch({type: BookActionTypes.BOOK_SUCCESS, payload: book});
      dispatch({type: BookActionTypes.BOOK_END});
    } catch (error) {
      const errorMes = 'Error during try to show book:';
      dispatch({
        type: BookActionTypes.BOOK_ERROR,
        payload: `${errorMes} ${error}`
      });
      console.log(errorMes, error);
    }
  };
};