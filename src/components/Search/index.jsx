import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';
import styles from './Search.module.scss';

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      value={searchValue}
      onChange={onChangeInput}
      className={styles.root}
      placeholder="Поиск пиццы..."
    />
  );
};
