import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Contacts: React.FC = () => {
  const { constactEmail, siteUrl, facebookUrl, twitterUrl, linkedInUrl } = useSiteMetadata();

  return (
    <div id='contacts'>
      <div className='inner'>
        <ul className='icons'>
          <li>
            <a href={siteUrl} className='icon fa-dribbble'>
              <span className='label'>Website</span>
            </a>
          </li>
          <li>
            <a href={facebookUrl} className='icon fa-facebook'>
              <span className='label'>Facebook</span>
            </a>
          </li>
          <li>
            <a href={twitterUrl} className='icon fa-twitter'>
              <span className='label'>Twitter</span>
            </a>
          </li>
          <li>
            <a href={linkedInUrl} className='icon fa-linkedin'>
              <span className='label'>Linked In</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${constactEmail}`} className='icon fa-envelope-o'>
              <span className='label'>Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
