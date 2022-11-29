
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
  volumeInfo?: BookInfo
}

export interface BookSearchResponse {
  totalItems: number,
  items: Array<BookItem>
}

export type BookShowResponse = BookItem;

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

export interface BookState {
  search: string,
  book: string
}

export enum BookActionTypes {
  BOOK_START = 'BOOK_START',
  BOOK_SUCCESS = 'BOOK_SUCCESS',
  BOOK_ERROR = 'BOOK_ERROR',
  BOOK_SAVE = 'BOOK_SAVE'
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

interface BookSaveAction {
  type: BookActionTypes.BOOK_SAVE,
  payload: string
}

export type BookActions = BookStartAction | BookSuccessAction | BookErrorAction | BookSaveAction;
