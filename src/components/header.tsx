'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const navLinks = [
  { href: '#about', label: 'About Me' },
  { href: '#services', label: 'Services' },
  { href: '#calm-space', label: 'Calm Space' },
  { href: '#ymhfa', label: 'YMHFA Courses' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const { name } = useSiteMetadata();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // While the mobile menu is open: lock body scroll, close on Escape,
  // and close automatically if the viewport grows back to desktop width.
  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 1100) setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <Link href="/" className="logo" onClick={closeMenu}>
            <span className="logo-name">{name}</span>
            <span className="logo-tagline">Registered Psychologist & Instructor</span>
          </Link>

          <nav className="nav-desktop">
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary header-cta">
              Get in Touch
            </a>
          </div>

          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Slide-down navigation for small screens */}
      <nav
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
          Get in Touch
        </a>
      </nav>

      <div
        className={`mobile-nav-overlay ${menuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};

export default Header;
