'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

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
    <div style={{ padding: '20px', border: '1px solid red', margin: '20px' }}>
      <h2>Something went wrong!</h2>
      <p>There was an error loading this WordPress page.</p>
      <button
        onClick={() => reset()}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Try again
      </button>
    </div>
  );
}
