import {
  BookActions,
  BookActionTypes,
  BookSearchResponse,
  BookSearchState
} from '../../action-creators/Books/Books.typings';

const initialState: BookSearchState = {
  loading: false,
  payload: {
    kind: '',
    totalItems: 0,
    items: []
  },
  error: ''
};

export const bookSearchReducer = (state = initialState, action: BookActions): BookSearchState => {
  switch (action.type) {
  case BookActionTypes.BOOK_START:
    return {...state, loading: true, error: ''};
  case BookActionTypes.BOOK_SUCCESS:
    return {...state, payload: action.payload as BookSearchResponse, loading: false};
  case BookActionTypes.BOOK_ERROR:
    return {...state, loading: false, error: action.error};
  default:
    return state;
  }
};
