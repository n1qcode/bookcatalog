export interface BookResponse {
  kind: string,
  totalItems: number,
  items: []
}

export interface BookState {
  loading?: boolean;
  payload?: any;
  searchValue?: string;
  error?: string
}

export enum BookActionTypes {
  BOOK_START = 'BOOK_START',
  BOOK_SUCCESS = 'BOOK_SUCCESS',
  BOOK_END = 'BOOK_END',
  BOOK_ERROR = 'BOOK_ERROR'
}

interface BookStartAction {
  type: BookActionTypes.BOOK_START;
}

interface BookSuccessAction {
  type: BookActionTypes.BOOK_SUCCESS;
  searchValue?: string,
  payload: any;
}

interface BookEndAction {
  type: BookActionTypes.BOOK_END;
}

interface BookErrorAction {
  type: BookActionTypes.BOOK_ERROR;
  payload: string;
}

export type BookActions = BookStartAction | BookSuccessAction | BookEndAction | BookErrorAction