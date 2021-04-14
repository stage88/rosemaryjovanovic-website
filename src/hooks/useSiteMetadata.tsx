import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  site: {
    siteMetadata: {
      title: string;
      name: string;
      description: string;
      url: string;
      author: string;
      authorUrl: string;
      sourceUrl: string;
      siteImage: string;
      constactEmail: string;
    };
  };
};

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          name
          description
          url
          author
          sourceUrl
          siteImage
          authorUrl
          constactEmail
        }
      }
    }
  `);

  // console.log(data);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
