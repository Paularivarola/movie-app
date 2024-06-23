'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';

interface HeaderProps {
  iconColor?: string;
  isAbsolute?: boolean;
}

function Header({ iconColor = 'white', isAbsolute = false }: HeaderProps) {
  const router = useRouter();
  return (
    <div>
      <header className={`${isAbsolute ? styles.headerAbsolute : styles.header}`}>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.button}
            onClick={() => router.push('/')}
            aria-label="Home"
          >
            <MovieFilterOutlinedIcon style={{ color: iconColor }} />
          </button>
        </div>
        {isAbsolute && (
          <SearchBar />
        )}
      </header>
    </div>
  );
}

export default Header;
