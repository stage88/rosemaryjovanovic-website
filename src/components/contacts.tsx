import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Contacts: React.FC = () => {
  const { constactEmail } = useSiteMetadata();

  return (
    <div id='contacts'>
      <div className='inner'>
        <ul className='icons'>
          {/* <li>
            <a href='#' className='icon fa-twitter'>
              <span className='label'>Twitter</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon fa-github'>
              <span className='label'>Github</span>
            </a>
          </li> */}
          <li>
            <a href='/' className='icon fa-dribbble'>
              <span className='label'>Dribbble</span>
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
