import { BookActions, BookActionTypes, BookState } from '../../action-creators/Books/Books.typings';

const initialState: BookState = {
  loading: false,
  payload: null,
  error: ''
};

export const bookReducer = (state = initialState, action: BookActions): BookState => {
  switch (action.type) {
  case BookActionTypes.BOOK_START:
    return {...state, loading: true, error: ''};
  case BookActionTypes.BOOK_SUCCESS:
    return {...state, payload: action.payload};
  case BookActionTypes.BOOK_END:
    return {...state, loading: false};
  case BookActionTypes.BOOK_ERROR:
    return {...state, loading: false, error: action.payload};
  default:
    return state;
  }
};