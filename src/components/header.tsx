import Link from 'next/link';
import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Contacts from './contacts';

const Header: React.FC = () => {
  const { name, description } = useSiteMetadata();

  return (
    <header id='header'>
      <div className='inner'>
        <Link href='/' className='image avatar'>
          <img src='/images/profile-photo-s.jpg' alt={name} />
        </Link>
        <h1>
          <strong>{name}</strong>
        </h1>
        <h1>{description}</h1>
      </div>
      <Contacts />
    </header>
  );
};

export default Header;
