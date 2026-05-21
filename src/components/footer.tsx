import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Footer: React.FC = () => {
  const { name, author, authorUrl, sourceUrl } = useSiteMetadata();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <h3>{name}</h3>
            <p>Caring & Effective Psychological Services on the Gold Coast</p>
          </div>
          <div className="footer-quote">
            "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity."
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Rosemary Jovanovic. All rights reserved.
          </div>
          <div>
            Designed with care &bull; <a href={sourceUrl} target="_blank" rel="noopener noreferrer">Theme</a> by <a href={authorUrl} target="_blank" rel="noopener noreferrer">{author}</a> &bull; <span style={{ opacity: 0.8 }}>Gold Coast, QLD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
