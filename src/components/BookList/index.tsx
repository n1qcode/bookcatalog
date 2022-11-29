import { Pagination } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteNames } from '../../router/routes/routes.enum';
import BookCard from '../BookCard';
import {useAppSelector} from '../../hooks/useAppSelector';
import {BookInfo, BookItem, BookSearchResponse} from '../../store/action-creators/Books/Books.typings';
import {useSearchBookQuery} from '../../store/api/book.api';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {bookSlice} from '../../store/slices/Book.slice';

import { BookListStyled } from './BookList.styles';

const BookList = () => {
  const {search} = useAppSelector(state => state.bookReducer);
  const router = useNavigate();
  const [books, setBooks] = useState<BookItem[]>([]);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { isLoading, data: payload } = useSearchBookQuery(search, {
    skip: search?.length < 2,
    refetchOnFocus: true
  });

  const bookFilter = (): BookItem[] => payload?.items?.filter(
    (_, index) => index >= (page - 1) * 5 && index < page * 5
  ) || [];

  useEffect(() => {
    const searched = localStorage.getItem('search');
    dispatch(bookSlice.actions.bookSearch(searched as string));
  },
  []);

  useEffect(() => {
    if (payload === undefined || payload.totalItems) setResult(null);
    else setResult('Nothing found');
    setBooks(bookFilter);
    setPage(1);
  }, [payload]);

  useEffect(() => setBooks(bookFilter), [page]);

  const handlePageChange = (_, value: number) => setPage(value);

  const showBookHandler = useCallback((id: string, name: string) => {
    dispatch(bookSlice.actions.bookShow(id));
    router(`${RouteNames.BOOK}/${name}`);
  }, []);

  return !isLoading ? (
    <BookListStyled>
      {!!result && <h3>{result}</h3>}
      {books.map((elem: BookItem) => (
        <BookCard
          {...elem.volumeInfo as BookInfo}
          show={() => showBookHandler(elem.id, (elem.volumeInfo as BookInfo).title)}
          key={elem.id}
        />
      ))}
      {!!books.length && (
        <Pagination
          sx={{ display: 'flex', justifyContent: 'center' }}
          count={Math.ceil((payload as BookSearchResponse)?.items?.length / 5) || 5}
          page={page}
          onChange={handlePageChange}
        />
      )}
    </BookListStyled>
  ) : (
    <h3>Searching...</h3>
  );
};

export default BookList;
