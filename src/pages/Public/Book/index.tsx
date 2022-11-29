import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import BookCard from '../../../components/BookCard';
import { RouteNames } from '../../../router/routes/routes.enum';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {useShowBookQuery} from '../../../store/api/book.api';

import { BookShowStyled } from './Book.styles';

const Book = () => {
  const {book} = useAppSelector(state => state.bookReducer);
  const router = useNavigate();
  const {isLoading, data} = useShowBookQuery(book);
  const payload = data ?? null;

  const backHandler = () => router(RouteNames.HOME);

  return (
    <BookShowStyled>
      {!isLoading ?
        <>
          <div>
            <Button variant="outlined" size="small" onClick={backHandler}
            >Back to search</Button>
          </div>
          {(payload && payload.volumeInfo) && <BookCard {...payload.volumeInfo} />}
        </> :
        <h3>Book is loading...</h3>}
    </BookShowStyled>
  );
};


export default Book;
