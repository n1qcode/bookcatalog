import TextField from '@mui/material/TextField';
import {ChangeEvent, useEffect, useState} from 'react';

import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useDebounceNew} from '../../hooks/useDebounceNew';
import {bookSlice} from '../../store/slices/Book.slice';

const Search = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const debounced = useDebounceNew(search);

  useEffect(() => {
    debounced.length > 1 && dispatch(bookSlice.actions.bookSearch(debounced));
    !!debounced && localStorage.setItem('search', debounced);
  }, [debounced]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  return (
    <TextField
      sx={{ width: '800px' }}
      id="filled-search"
      label="Search book"
      type="search"
      size="small"
      value = {search}
      onChange={handleChange}
    />
  );
};

export default Search;
