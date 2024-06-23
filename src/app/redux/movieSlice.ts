import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genres: Genre[];
}

interface MovieState {
  popularMovies: Movie[];
  searchResults: Movie[];
  selectedMovie: Movie | null;
  similarMovies: Movie[];
  loading: boolean;
}

const initialState: MovieState = {
  popularMovies: [],
  searchResults: [],
  selectedMovie: null,
  similarMovies: [],
  loading: false,
};

export const fetchPopularMovies = createAsyncThunk<Movie[]>('movies/fetchPopularMovies', async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
  });
  return response.data.results;
});

export const searchMovies = createAsyncThunk<Movie[], string>('movies/searchMovies', async (query: string) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: {
      query,
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
  });
  return response.data.results;
});

export const fetchMovieDetails = createAsyncThunk<Movie[], string>('movies/fetchMovieDetails', async (id: string) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
  });
  return response.data;
});

export const fetchSimilarMovies = createAsyncThunk<Movie[], string>('movies/fetchSimilarMovies', async (id: string) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
  });
  return response.data.results;
});

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<Movie | null>) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.popularMovies = action.payload;
      })
      .addCase(searchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.selectedMovie = action.payload;
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.similarMovies = action.payload;
      });
  },
});

export const { setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;
