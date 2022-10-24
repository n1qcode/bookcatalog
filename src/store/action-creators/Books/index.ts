import {Dispatch} from 'redux';

import BookService from '../../../services/BookService';

import { BookActions, BookActionTypes } from './Books.typings';


export const bookSearch = (data: string, index: number) => {
  return async (dispatch: Dispatch<BookActions>) => {
    dispatch({type: BookActionTypes.BOOK_START});
    await BookService.search(data, index)
      .then(response => response.json())
      .then(response => {
        dispatch({type: BookActionTypes.BOOK_SUCCESS, payload: response});
        console.log(response);
        dispatch({type: BookActionTypes.BOOK_END});
      })
      .catch(error => {
        const errorMes = 'Error during search books:';
        dispatch({
          type: BookActionTypes.BOOK_ERROR,
          payload: `${errorMes} ${error}`
        });
        console.log(errorMes, error);
      });
  };
};

export const bookShow = (data: number) => {
  return async (dispatch: Dispatch<BookActions>) => {
    dispatch({type: BookActionTypes.BOOK_START});
    await BookService.show(data)
      .then(response => response.json())
      .then(response => {
        dispatch({type: BookActionTypes.BOOK_SUCCESS, payload: response});
        console.log(response);
        dispatch({type: BookActionTypes.BOOK_END});
      })
      .catch(error => {
        const errorMes = 'Error during try to show book:';
        dispatch({
          type: BookActionTypes.BOOK_ERROR,
          payload: `${errorMes} ${error}`
        });
        console.log(errorMes, error);
      });
  };
};