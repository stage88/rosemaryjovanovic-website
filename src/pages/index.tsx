import React from 'react';
import Layout from '../components/layout';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <h1>
          Congratulations
          <br />
          <span>— you just made a Gatsby site! </span>
          <span role='img' aria-label='Party popper emojis'>
            🎉🎉🎉
          </span>
        </h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
