import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
};

const NotFoundPage = () => {
  return (
    <>
      <h1>Page not found</h1>

      <p>
        Sorry&nbsp;
        <span role='img' aria-label='Pensive emoji'>
          😔
        </span>
        &nbsp; we couldn&apos;t find what you were looking for.
      </p>
    </>
  );
};

export default NotFoundPage;
