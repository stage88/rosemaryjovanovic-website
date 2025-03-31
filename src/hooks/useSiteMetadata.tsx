type Props = {
  title: string;
  name: string;
  description: string;
  siteUrl: string;
  author: string;
  authorUrl: string;
  sourceUrl: string;
  siteImage: string;
  constactEmail: string;
  linkedInUrl: string;
  twitterUrl: string;
  facebookUrl: string;
  gtmId: string;
};

const useSiteMetadata = (): Props => {
  return {
    title: 'Rosemary Jovanovic - Canberra Psychologist',
    name: 'Rosemary Jovanovic',
    description: 'Caring Effective Psychological Services',
    siteUrl: 'https://rosemaryjovanovic.com.au/',
    author: 'Sam Ilic',
    constactEmail: 'rosie@rosemaryjovanovic.com.au',
    authorUrl: 'https://github.com/stage88',
    sourceUrl: 'https://github.com/stage88/rosemaryjovanovic-website',
    siteImage: 'images/profile-photo-s.jpg',
    linkedInUrl: 'https://au.linkedin.com/in/rosemary-jovanovic-95a02367',
    twitterUrl: 'https://twitter.com/rosiejov',
    facebookUrl: 'https://www.facebook.com/rosemary.jovanovic',
    gtmId: 'G-DVKEWH6P8L',
  }
};

export default useSiteMetadata;
