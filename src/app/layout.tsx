import React from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

import '../assets/scss/main.scss';

import Header from '@/components/header';
import SEO from '@/components/seo';
import useSiteMetadata from '@/hooks/useSiteMetadata';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { gtmId } = useSiteMetadata();
  
  return (
    <html suppressHydrationWarning={true} className='scroll-smooth!' lang='en'>
      <head>
        <SEO />
      </head>
      <GoogleTagManager gtmId={gtmId} />

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
