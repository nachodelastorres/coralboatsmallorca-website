'use client';

import { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-40a3f06d-40b7-455d-a37d-5c9c0add01e0"
      data-elfsight-app-lazy
      style={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    />
  );
};

export default GoogleReviews;
