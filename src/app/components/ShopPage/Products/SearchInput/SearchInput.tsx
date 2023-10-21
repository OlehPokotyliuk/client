import React from 'react';
import classes from './SearchInput.module.scss';
const SearchInput = () => {
  return (
    <input className={classes.searchInput} type="text" placeholder='Поиск' />
  );
};

export default SearchInput;