'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={`header ${!isHome ? 'transparent' : ''}`}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <Link href="/" className="logo">Spooniverse</Link>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/start">Start Here</Link>
      </nav>
    </header>
  );
}
