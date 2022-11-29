import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {BookSearchResponse, BookShowResponse} from '../action-creators/Books/Books.typings';

export const bookApi = createApi({
  reducerPath: 'book/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchBook: build.query<BookSearchResponse, string>({
      query: (id: string, start = 0, max = 40) => ({
        url: 'v1/volumes/',
        params: {
          q: id,
          startIndex: start,
          maxResults: max
        }
      })
    }),
    showBook: build.query<BookShowResponse, string>({
      query: (id: string) => ({
        url: `v1/volumes/${id}`
      })
    })
  })
});

export const {useSearchBookQuery, useShowBookQuery} = bookApi;