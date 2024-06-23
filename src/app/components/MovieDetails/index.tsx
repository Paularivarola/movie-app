'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchMovieDetails, fetchSimilarMovies } from '../../redux/movieSlice';
import Header from '../Header/page';
import styles from './MovieDetails.module.css';

interface MovieDetailsProps {
  movieId: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedMovie, similarMovies } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
    dispatch(fetchSimilarMovies(movieId));
  }, [dispatch, movieId]);

  return (
    <div>
      <Header />
      <Box className={styles.container}>
        {selectedMovie && (
          <>
            <Grid className={styles.movieGrid} container spacing={2}>
              <Grid item xs={12} md={4}>
                <Image
                  src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
                  alt={selectedMovie.title}
                  width={300}
                  height={450}
                  className={styles.posterImage}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography className={styles.movieTitle} variant="h4" component="h1" gutterBottom>
                  {selectedMovie.title}
                </Typography>
                <Typography className={styles.movieText} variant="body1" gutterBottom>
                  {selectedMovie.release_date}
                </Typography>
                <Typography className={styles.movieText} variant="body2" gutterBottom>
                  {selectedMovie.genres.map((genre) => genre.name).join(', ')}
                </Typography>
                <Typography className={`${styles.movieText} ${styles.movieOverview}`} variant="body1" paragraph>
                  {selectedMovie.overview}
                </Typography>
                <Typography className={styles.movieText} variant="body2">
                  Rating: {selectedMovie.vote_average}
                </Typography>
              </Grid>
            </Grid>
            <Typography className={styles.similarMoviesTitle} variant="h5" component="h2">
              Similar Movies
            </Typography>
            <Grid container spacing={2}>
              {!similarMovies.length ?
                <Typography className={styles.noResults} variant='h5'>No results found</Typography>
                : similarMovies.map((movie) => (
                  <Grid item xs={6} sm={4} md={3} key={movie.id}>
                    <Box className={styles.similarMovieBox}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                        width={200}
                        height={300}
                        className={styles.similarPosterImage}
                      />
                      <Typography className={styles.movieText} variant="body2">
                        {movie.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
};

export default MovieDetails;
