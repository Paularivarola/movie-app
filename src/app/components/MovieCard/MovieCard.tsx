'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, Typography } from '@mui/material';
import { Movie } from '@/app/redux/movieSlice';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <Card onClick={handleClick} className={styles.card}>
      <Image
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        width={200}
        height={300}
        className={styles.image}
        priority
      />
      <CardContent className={styles.cardContent}>
        <Typography className={`${styles.typography} ${styles.typographyBold}`} variant="body1" noWrap>{movie.title}</Typography>
        <Typography className={styles.typography} variant="body2" noWrap>{movie.release_date}</Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
