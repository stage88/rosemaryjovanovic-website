import React from 'react';

import Header from '@/components/header';
import SEO from '@/components/seo';

import '../assets/scss/main.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html suppressHydrationWarning={true} className='scroll-smooth!' lang='en'>
      <head>
        <SEO />
      </head>

      <body>
        <div>
          <Header />
          <div id='main'>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
