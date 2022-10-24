
export const API_URL = 'https://www.googleapis.com/books';

const $api = (url: string) => fetch(`${API_URL}${url}`);

export default $api;