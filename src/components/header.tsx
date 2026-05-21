import Link from 'next/link';
import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Header: React.FC = () => {
  const { name } = useSiteMetadata();

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" className="logo">
          <span className="logo-name">{name}</span>
          <span className="logo-tagline">Registered Psychologist & Instructor</span>
        </Link>
        
        <nav>
          <ul className="nav-menu">
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#calm-space">Calm Space</a></li>
            <li><a href="#ymhfa">YMHFA Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
