
export const API_URL = 'https://www.googleapis.com/books';

const $api = (url: string): Promise<Response> => fetch(`${API_URL}${url}`);

export default $api;
