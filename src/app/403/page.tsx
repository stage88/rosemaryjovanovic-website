import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Access Denied',
};

const AccessDenied = () => {
  return (
    <>
      <h1>Access Denied</h1>
      <p>Please check the URL or return to the homepage.</p>
    </>
  );
};

export default AccessDenied;
