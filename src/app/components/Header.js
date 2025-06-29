'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const countries = [
  { name: 'Italy', href: '/italy' },
  { name: 'Japan', href: '/japan' },
  { name: 'Mexico', href: '/mexico' },
  { name: 'France', href: '/france' },
  { name: 'Tunisia', href: '/tunisia' },
];

export default function Header() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  // Pages where header should be white background and black toggler
  const whitePages = ['/', '/about'];
  const isWhite = whitePages.includes(pathname);

  return (
    <nav className={`header navbar navbar-expand-lg ${isWhite ? '' : 'transparent'}`}>
      <div className="container-fluid">
        <Link
          href="/"
          className="navbar-brand fs-3 fw-bold text-uppercase spooniverse-logo"
          style={{
            fontFamily: 'var(--font-dancing), cursive',
          }}
        >
          Spooniverse
        </Link>

        {/* Toggler Button with dynamic color class */}
        <button
          className={`navbar-toggler ${isWhite ? 'toggler-black' : 'toggler-white'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center gap-4">
            <li className="nav-item">
              <Link href="/" className="nav-link nav-colored">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link nav-colored">
                About
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
              >
                Countries
              </button>
              <ul className={`dropdown-menu${showDropdown ? ' show' : ''}`}>
                {countries.map((c) => (
                  <li key={c.name}>
                    <Link className="dropdown-item" href={c.href}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
