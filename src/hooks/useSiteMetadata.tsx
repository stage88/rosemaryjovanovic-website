type Props = {
  title: string;
  name: string;
  description: string;
  siteUrl: string;
  author: string;
  authorUrl: string;
  sourceUrl: string;
  siteImage: string;
  contactEmail: string;
  linkedInUrl: string;
  twitterUrl: string;
  facebookUrl: string;
  gtmId: string;
};

export const siteMetadata = {
  title: 'Rosemary Jovanovic | Gold Coast Psychologist & YMHFA Instructor',
  name: 'Rosemary Jovanovic',
  description: 'Experienced Gold Coast Psychologist and accredited Youth Mental Health First Aid (YMHFA) instructor offering supportive, evidence-based therapy for anxiety, depression, stress, trauma, grief, and youth support.',
  siteUrl: 'https://rosemaryjovanovic.com.au/',
  author: 'Sam Ilic',
  contactEmail: 'rosie@rosemaryjovanovic.com.au',
  authorUrl: 'https://github.com/stage88',
  sourceUrl: 'https://github.com/stage88/rosemaryjovanovic-website',
  siteImage: '/images/profile-photo-s.jpg',
  linkedInUrl: 'https://au.linkedin.com/in/rosemary-jovanovic-95a02367',
  twitterUrl: 'https://twitter.com/rosiejov',
  facebookUrl: 'https://www.facebook.com/rosemary.jovanovic',
  gtmId: 'G-DVKEWH6P8L',
};

const useSiteMetadata = (): Props => {
  return siteMetadata;
};

export default useSiteMetadata;
