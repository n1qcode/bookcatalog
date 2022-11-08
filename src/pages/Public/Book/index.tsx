import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import BookCard from '../../../components/BookCard';
import { RouteNames } from '../../../router/routes/routes.enum';
import {useAppSelector} from '../../../hooks/useAppSelector';

import { BookShowStyled } from './Book.styles';

const Book = () => {
  const {loading, payload} = useAppSelector(state => state.bookShow);
  const router = useNavigate();

  const backHandler = () => router(RouteNames.HOME);

  return (
    <BookShowStyled>
      { !loading ? <>
        <div>
          <Button variant="outlined" size="small" onClick={backHandler}>Back to home</Button>
        </div>
        <BookCard
          title={payload.items.volumeInfo.title}
          authors={payload.items.volumeInfo.authors}
          publishedDate={payload.items.volumeInfo.publishedDate}
          publisher={payload.items.volumeInfo.publisher}
          printType={payload.items.volumeInfo.printType}
          pageCount={payload.items.volumeInfo.pageCount}
          language={payload.items.volumeInfo.language}
          description={payload.items.volumeInfo.description}
          icon={payload.items.volumeInfo.imageLinks.thumbnail} /> </> :
        <h3>Book is loading...</h3> }
    </BookShowStyled>
  );
};


export default Book;
