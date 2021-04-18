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
          <h2>My name is Rosemary Jovanovic, I am a Canberra based Psychologist.</h2>
        </header>
        <p>
          I am an accredited Youth Mental Health First Aid (YMHFA) Instructor and a Registered Psychologist. I have
          worked with children, adolescents and young adults for over 20 years as School Psychologist, Psychologist in
          private practice and High School teacher.
        </p>
        <p>
          I am passionate about helping people understand mental illness and how to support people experiencing mental
          health problems. You can contact me if you would like me to conduct a YMHFA course for your organisation,
          workplace or school. This course is suitable for any person working or living with young people.
        </p>
        <p>Some of the psychological services I provide (but not limited to) are listed below.</p>

        <h3>Depression</h3>
        <p>
          Improve your energy, motivation and mood. Depression will tell you it’s “hopeless” and nothing will work, but
          effective help is available!
        </p>

        <h3>Stress</h3>
        <p>
          Reduce irritability, improve sleep and regain your health and life satisfaction when you learn how to manage
          your stress.
        </p>

        <h3>Anxiety</h3>
        <p>
          Help for social anxiety, health anxiety, worry and generalised anxiety, panic attacks, OCD, and phobias. Clear
          your mind and find your calm with our effective therapies.
        </p>

        <h3>Trauma</h3>
        <p>
          Trauma sustained as a child or adult can have ongoing effects in every aspect of your life, your relationships
          and your sense of yourself. Get help today.
        </p>

        <h3>Grief and loss</h3>
        <p>
          Help heal the pain of grief and loss for a person, pet, role or other life change. You are not alone and
          therapy can help.
        </p>        
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
