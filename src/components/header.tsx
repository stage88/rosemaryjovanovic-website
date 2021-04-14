import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import ProfileImage from '../images/profile-photo-s.jpg';
import Contacts from './contacts';

const Header: React.FC = () => {
  const { name, description } = useSiteMetadata();

  return (
    <header id='header'>
      <div className='inner'>
        <a href='/' className='image avatar'>
          <img src={ProfileImage} alt={name} />
        </a>
        <h1>
          <strong>{name}</strong>
        </h1>
        <h1>
          {description}
        </h1>
      </div>
      <Contacts />
    </header>
  );
};

export default Header;
