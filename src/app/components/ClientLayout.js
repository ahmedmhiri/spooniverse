'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import AdSense from './Adsens';

export default function ClientLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Header />
      <AdSense pId="pub-7278968735326508" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
