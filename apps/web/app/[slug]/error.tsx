'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h2>Something went wrong!</h2>
      <p>There was an error loading this WordPress page.</p>
      <button
        onClick={() => reset()}
        className={styles.retryButton}
      >
        Try again
      </button>
    </div>
  );
}
