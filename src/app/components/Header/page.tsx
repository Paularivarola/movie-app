'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/page';

interface HeaderProps {
  iconColor?: string;
  isAbsolute?: boolean;
}

const Header: React.FC<HeaderProps> = ({ iconColor = 'white', isAbsolute = false }) => {
  const router = useRouter();
  return (
    <div>
      <header className={`${isAbsolute ? styles.headerAbsolute : styles.header}`}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => router.push('/')}
          >
            <MovieFilterOutlinedIcon style={{ color: iconColor }} />
          </button>
        </div>
        {isAbsolute &&
          <SearchBar />}
      </header>
    </div>
  );
};

export default Header;
