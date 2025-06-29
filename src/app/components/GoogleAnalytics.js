'use client'; 

import { useEffect } from 'react';

export default function GoogleAnalytics({ measurementId }) {
  useEffect(() => {
    if (!window.gtag) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', measurementId);
      };
    }
  }, [measurementId]);

  return null;
}
