'use client';

import PopularMovies from './components/PopularMovies';
import SearchResults from './components/SearchResults/page';
import Hero from './components/Hero/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchResults />
      <PopularMovies />
    </main>
  );
}
