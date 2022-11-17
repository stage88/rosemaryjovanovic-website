import React from 'react';
import Header from './header';
import SEO from './seo';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div id='main'>{children}</div>
      </div>
    </>
  );
};

export default Layout;
