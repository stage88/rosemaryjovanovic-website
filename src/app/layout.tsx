import type { Metadata } from 'next';
import React from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

import '../assets/scss/main.scss';

import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import useSiteMetadata, { siteMetadata } from '@/hooks/useSiteMetadata';

// Runs synchronously during HTML parsing — sets the theme class on <html>
// before any content paints, eliminating the flash of the wrong theme.
const themeInitScript = `(function(){try{var k='rj-ui-theme';var t=localStorage.getItem(k);var s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var c=(t==='dark'||t==='light')?t:s;document.documentElement.classList.add(c);}catch(e){}})();`;

const site = siteMetadata;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.title,
  description: site.description,
  keywords: [
    'Gold Coast Psychologist',
    'Psychologist Gold Coast',
    'Rosemary Jovanovic',
    'Depression Support Gold Coast',
    'Anxiety Therapy Gold Coast',
    'Stress Management Psychologist',
    'Trauma Counseling Gold Coast',
    'PTSD Recovery Gold Coast',
    'Grief Counseling Gold Coast',
    'Adolescent Psychologist Gold Coast',
    'Youth Mental Health First Aid',
    'YMHFA Instructor Gold Coast',
    'Mental Health Courses Gold Coast'
  ],
  authors: [{ name: site.author, url: site.authorUrl }],
  creator: site.author,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.siteUrl,
    siteName: 'Rosemary Jovanovic Psychology',
    images: [
      {
        url: site.siteImage,
        width: 800,
        height: 800,
        alt: site.title,
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    creator: '@rosiejov',
    images: [site.siteImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  alternates: {
    canonical: site.siteUrl,
  },
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { gtmId } = useSiteMetadata();
  
  return (
    <html suppressHydrationWarning={true} className='scroll-smooth!' lang='en'>
      <GoogleTagManager gtmId={gtmId} />

      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <div>
            <Header />
            <div id='main'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
