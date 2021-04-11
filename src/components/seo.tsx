import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

const SEO: React.FC = ({ children }) => {
  const site = useSiteMetadata();

  const {
    title,
    description,
    url,
    author,
  } = site;

  return (
    <Helmet title={title} defaultTitle={title}>
      <html lang={'en-US'} />
      <meta name='description' content={description} />
      {/* <meta name='image' content={seo.image} /> */}
      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      {/* <meta property='og:image' content={seo.image} /> */}
      <meta property='og:type' content='website' />
      <meta property='og:image:alt' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:description' content={description} />
      {/* <meta name='twitter:image' content={seo.image} /> */}
      <meta name='twitter:image:alt' content={description} />
      <meta name='twitter:creator' content={author} />
      <link rel='icon' type='image/png' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/favicon.ico' />
      {children}
    </Helmet>
  );
};

export default SEO;
