
export interface BookInfo {
  title: string,
  authors: string[],
  publishedDate: string,
  description: string,
  imageLinks: {
    thumbnail: string,
  },
  publisher: string,
  printType: string,
  pageCount: number,
  language: string,
}

export type BookItem = {
  id: string,
  volumeInfo: BookInfo
}

export interface BookSearchResponse {
  kind: string,
  totalItems: number,
  items: Array<BookItem>
}

export interface BookShowResponse {
  kind: string,
  totalItems: number,
  items: BookItem
}

export interface BookSearchState {
  loading: boolean;
  payload: BookSearchResponse;
  error: string
}

export interface BookShowState {
  loading: boolean;
  payload: BookShowResponse;
  error: string
}

export enum BookActionTypes {
  BOOK_START = 'BOOK_START',
  BOOK_SUCCESS = 'BOOK_SUCCESS',
  BOOK_ERROR = 'BOOK_ERROR'
}

interface BookStartAction {
  type: BookActionTypes.BOOK_START;
}

interface BookSuccessAction {
  type: BookActionTypes.BOOK_SUCCESS;
  payload: BookSearchResponse | BookShowResponse;
}

interface BookErrorAction {
  type: BookActionTypes.BOOK_ERROR;
  error: string;
}

export type BookActions = BookStartAction | BookSuccessAction | BookErrorAction;
