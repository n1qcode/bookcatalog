import { Pagination } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteNames } from '../../router/routes/routes.enum';
import BookCard from '../BookCard';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {BookItem} from '../../store/action-creators/Books/Books.typings';
import {book} from '../../store/action-creators/Books';
import BookService from '../../services/BookService';

import { BookListStyled } from './BookList.styles';

const BookList = () => {
  const dispatch = useAppDispatch();
  const {loading, payload} = useAppSelector(state => state.bookSearch);
  const router = useNavigate();
  const [books, setBooks] = useState<BookItem[]>([]);
  const [page, setPage] = useState(1);

  const bookFilter = (): BookItem[] => {
    payload.items.filter(
      (_, index) => index >= (page - 1) * 5 && index < page * 5
    );
    return [];
  };

  useEffect(() => {
    setBooks(bookFilter);
    setPage(1);
  }, [payload]);

  useEffect(() => {
    setBooks(bookFilter);
  }, [page]);

  const handlePageChange = (_, value: number) => {
    setPage(value);
  };

  const showBookHandler = useCallback((id: string, name: string) => {
    router(`${RouteNames.BOOK}/${name}`);
    dispatch(book(id, BookService.show));
  }, []);

  return !loading ? (
    <BookListStyled>
      {books.map((elem: BookItem) => (
        <BookCard
          title={elem.volumeInfo.title}
          authors={elem.volumeInfo.authors}
          publishedDate={elem.volumeInfo.publishedDate}
          description={elem.volumeInfo.description}
          icon={elem.volumeInfo.imageLinks.thumbnail}
          show={() => showBookHandler(elem.id, elem.volumeInfo.title)}
          key={elem.id}
        />
      ))}
      {books.length && (
        <Pagination
          sx={{ display: 'flex', justifyContent: 'center' }}
          count={Math.ceil(payload.items.length / 5) || 5}
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
