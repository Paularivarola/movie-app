'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import IcSearch from '@mui/icons-material/Search';
import { AppDispatch } from '../../redux/store';
import { searchMovies } from '../../redux/movieSlice';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(searchMovies(query));
  };

  return (
    <div>
      <form className={styles.containerSearch} onSubmit={handleSearch}>
        <div>
          <input
            id="search-input"
            className={styles.searchField}
            value={query}
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search input"
          />
        </div>
        <div className={styles.searchButtonContainer}>
          <button
            type="submit"
            className={styles.searchButton}
            aria-label="Search"
          >
            <IcSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
