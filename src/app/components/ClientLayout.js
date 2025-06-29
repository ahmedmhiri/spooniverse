'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import AdSense from './Adsens';
import GoogleAnalytics from './GoogleAnalytics';

export default function ClientLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Header />
      <AdSense pId="pub-7278968735326508" />
      <GoogleAnalytics measurementId="G-Z43TWKQ456" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
