import React from 'react';
import SEO from './seo';

const Layout: React.FC = ({ children }) => {
  return <>
    <SEO />
    {children}
  </>;
};

export default Layout;