import { useState } from 'react';
import classes from './SearchBar.module.scss';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  return (
    <input
      className={classes.input}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="search meals"
    />
  );
}

export default SearchBar;
