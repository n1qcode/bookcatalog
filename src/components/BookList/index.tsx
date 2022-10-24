import { Pagination } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../../router/routes/routes.enum';
import BookCard from '../BookCard';

import { BookListStyled } from './BookList.styles';

const BookList = () => {
  const { bookShow } = useActions();
  const {loading, payload} = useTypedSelector(state => state.book);
  const router = useNavigate();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setBooks(payload?.items?.filter((_, index) => (index >= (page - 1) * 5) && (index < page * 5)));
    setPage(1);
  }, [payload]);

  useEffect(() => {
    setBooks(payload?.items?.filter((_, index) => (index >= (page - 1) * 5) && (index < page * 5)));
  }, [page]);

  const handlePageChange = (_, value: number) => {
    setPage(value);
  };

  const showBookHandler = useCallback((id: number, name: string) => {
    router(`${RouteNames.BOOK}/${name}`);
    bookShow(id);
  }, []);

  return (
    !loading ?
      <BookListStyled>
        {books?.map((elem: any) =>
          (<BookCard
            title={elem?.volumeInfo?.title}
            authors={elem?.volumeInfo?.authors}
            publishedDate={elem?.volumeInfo?.publishedDate}
            description={elem?.volumeInfo?.description}
            icon={elem?.volumeInfo?.imageLinks?.thumbnail}
            show={() => showBookHandler(elem.id, elem?.volumeInfo?.title)}
            key={elem.id}/>))}
        {books?.length &&
        <Pagination sx={{display: 'flex', justifyContent: 'center'}} count={Math.ceil(payload?.items?.length / 5) || 5} page={page} onChange={handlePageChange} /> }
      </BookListStyled>      :
      <h3>Searching...</h3>
  );
};

export default BookList;