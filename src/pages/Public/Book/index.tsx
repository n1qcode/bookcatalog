import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import BookCard from '../../../components/BookCard';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { RouteNames } from '../../../router/routes/routes.enum';

import { BookShowStyled } from './Book.styles';

const Book = () => {
  const {loading, payload} = useTypedSelector(state => state.book);
  const router = useNavigate();

  const backHandler = () => router(RouteNames.HOME);

  return (
    <BookShowStyled>
      { !loading ? <>
        <div>
          <Button variant="outlined" size="small" onClick={backHandler}>Back to home</Button>
        </div>
        <BookCard
          title={payload?.volumeInfo?.title}
          authors={payload?.volumeInfo?.authors}
          publishedDate={payload?.volumeInfo?.publishedDate}
          publisher={payload?.volumeInfo?.publisher}
          printType={payload?.volumeInfo?.printType}
          pageCount={payload?.volumeInfo?.pageCount}
          language={payload?.volumeInfo?.language}
          description={payload?.volumeInfo?.description}
          icon={payload?.volumeInfo?.imageLinks?.thumbnail} /> </> :
        <h3>Book is loading...</h3> }
    </BookShowStyled>
  );
};


export default Book;