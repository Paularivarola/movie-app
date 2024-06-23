import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { RootState } from '../../redux/store';
import MovieCard from '../MovieCard/page';

const SearchResults: React.FC = () => {
    const { searchResults } = useSelector((state: RootState) => state.movie);

    return (
        <div style={{ padding: '4rem' }}>
            <Grid container spacing={2} justifyContent="center">
                {searchResults.map((movie) => (
                    <div key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </Grid>
        </div>
    );
};

export default SearchResults;
