import * as React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <h1>Page not found</h1>

      <p>
        Sorry&nbsp;
        <span role='img' aria-label='Pensive emoji'>😔</span>&nbsp;
        we couldn’t find what you were looking for.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
