'use client';

import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { AppDispatch, RootState, store } from '../../redux/store';
import { fetchPopularMovies } from '../../redux/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import styles from './PopularMovies.module.css';

export default function PopularMovies() {
  const dispatch = useDispatch<AppDispatch>();
  const { popularMovies } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <Typography color="#D8D2CB" variant="h4" className={styles.heading}>Popular Movies</Typography>
      <Box className={styles.scrollContainer}>
        <Box className={styles.movieList}>
          {popularMovies.map((movie) => (
            <Box key={movie.id} className={styles.movieItem}>
              <MovieCard movie={movie} />
            </Box>
          ))}
        </Box>
      </Box>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await store.dispatch(fetchPopularMovies());
  return { props: {} };
};
