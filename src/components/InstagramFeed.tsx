// src/components/InstagramFeed.tsx
'use client';
import { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-white pb-20">
      <div
        className="elfsight-app-fdb80a2b-e643-4ab5-88a7-b74814c4c097"
        data-elfsight-app-lazy
      />
    </section>
  );
};

export default InstagramFeed;
