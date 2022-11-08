import $api from '../http';

const BookService = {
  search: (data: string): Promise<Response> => $api(`/v1/volumes?q="${encodeURIComponent(data)}"&maxResults=40`),
  show: (data: string): Promise<Response> => $api(`/v1/volumes/${data}`)
};

export default BookService;
