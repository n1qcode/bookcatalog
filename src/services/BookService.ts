import $api from '../http';

const BookService = {
  search: (data: string, index: number) => $api(`/v1/volumes?q="${data}"&maxResults=40&startIndex=${index}`),
  show: (data: number) => $api(`/v1/volumes/${data}`)
};

export default BookService;