import React from 'react';
import Footer from '../components/footer';
import Layout from '../components/layout';
import useSiteMetadata from '../hooks/useSiteMetadata';

// markup
const IndexPage = () => {
  const { constactEmail } = useSiteMetadata();

  return (
    <Layout>
      <section id='one'>
        <header className='major'>
          <h2>
            Hello and welcome.&nbsp;
            <br />
            My name is Rosemary Jovanovic, I am a Canberra based Psychologist.
          </h2>
        </header>
        <p>I specialise in providing caring and effective psychological services with over 40 years of experience.</p>
        <p>Some of the psychological services I provide (but not limited to):</p>
        <ul>
          <li>Depression</li>
          <li>Stress</li>
          <li>Anxiety</li>
        </ul>
      </section>

      <section id='three'>
        <h2>Get In Touch</h2>
        <p>
          You can contact me via my email: <a href={`mailto:${constactEmail}`}>{constactEmail}</a>.
        </p>
      </section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
