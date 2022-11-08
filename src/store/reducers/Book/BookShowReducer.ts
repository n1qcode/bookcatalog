import {BookActions, BookActionTypes, BookShowResponse, BookShowState} from '../../action-creators/Books/Books.typings';

const initialState: BookShowState = {
  loading: false,
  payload: {
    kind: '',
    totalItems: 0,
    items: {
      id: '',
      volumeInfo: {
        title: '',
        authors: [],
        publishedDate: '',
        description: '',
        imageLinks: {
          thumbnail: '',
        },
        publisher: '',
        printType: '',
        pageCount: 0,
        language: '',
      }
    }
  },
  error: ''
};

export const bookShowReducer = (state = initialState, action: BookActions): BookShowState => {
  switch (action.type) {
  case BookActionTypes.BOOK_START:
    return {...state, loading: true, error: ''};
  case BookActionTypes.BOOK_SUCCESS:
    return {...state, payload: action.payload as BookShowResponse, loading: false};
  case BookActionTypes.BOOK_ERROR:
    return {...state, loading: false, error: action.error};
  default:
    return state;
  }
};
