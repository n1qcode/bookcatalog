import TextField from '@mui/material/TextField';
import {ChangeEvent} from 'react';

import {useAppDispatch} from '../../hooks/useAppDispatch';
import useDebounce from '../../hooks/useDebounce';
import {book} from '../../store/action-creators/Books';
import BookService from '../../services/BookService';

const Search = () => {
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce(dispatch, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if (val.length) debounceValue(book(val, BookService.search));
  };

  return (
    <TextField
      sx={{ width: '800px' }}
      id="filled-search"
      label="Search book"
      type="search"
      size="small"
      onChange={handleChange}
    />
  );
};

export default Search;
