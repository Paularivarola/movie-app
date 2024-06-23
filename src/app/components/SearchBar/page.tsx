"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography } from '@mui/material';
import IcSearch from '@mui/icons-material/Search';
import { AppDispatch } from '../../redux/store';
import { searchMovies } from '../../redux/movieSlice';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    dispatch(searchMovies(query));
  };

  return (
    <div className={styles.containerSearch}>
        <input
          className={styles.searchField}
          value={query}
          placeholder='Search...'
          onChange={(e) => setQuery(e.target.value)}
        />
      <div className={styles.searchButtonContainer}>
        <button
          className={styles.searchButton}
          onClick={handleSearch}
        >
          <IcSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
