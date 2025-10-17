'use client';
import { useEffect } from 'react';

const SalesNotification = () => {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-6344499f-6fe1-4839-86ea-bc3f634db5e0"
      data-elfsight-app-lazy
    />
  );
};

export default SalesNotification;
