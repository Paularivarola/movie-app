'use client';

import { useParams } from 'next/navigation';
import MovieDetails from '@/app/components/MovieDetails';

interface MoviePageProps {
    id: string;
}

const MoviePage: React.FC<MoviePageProps> = () => {
    const params = useParams();
    const { id } = params;

    return (<MovieDetails movieId={id as string} />);
};

export default MoviePage;
