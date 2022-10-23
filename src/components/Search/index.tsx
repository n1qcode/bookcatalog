import TextField from '@mui/material/TextField';
import { useCallback } from 'react';

import { useActions } from '../../hooks/useActions';

const Search = () => {
  const { bookSearch } = useActions();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const debounce = (fn: Function) => {
    let timer;
    return function(...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fn.apply(this, args);
        timer = null;
      }, 300);
    };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if (val.length) bookSearch(val, 0);
  };

  const searchHandler = useCallback(debounce(handleChange), []);

  return (
    <TextField
      sx={{ width: '800px' }}
      id="filled-search"
      label="Search book"
      type="search"
      size="small"
      onChange={searchHandler}
    />
  );
};

export default Search;
