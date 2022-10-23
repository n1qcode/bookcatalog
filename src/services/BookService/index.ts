import $api from '../../http';
import { BookResponse } from '../../store/action-creators/Books/actions/books.typings';

const BookService = {
  // eslint-disable-next-line max-len
  search: (data: string, index: number) => $api.get<BookResponse>(`/v1/volumes?q="${data}"&maxResults=40&startIndex=${index}`),
  show: (data: number) => $api.get<BookResponse>(`/v1/volumes/${data}`)
};

export default BookService;