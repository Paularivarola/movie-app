'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

function MoviePage() {
  const { id } = useParams();

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MovieDetails movieId={id as string} />
    </div>
  );
}

export default MoviePage;
