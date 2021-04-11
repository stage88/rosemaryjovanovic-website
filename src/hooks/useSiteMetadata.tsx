import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      url: string;
      author: string;
    };
  };
};

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
          author
        }
      }
    }
  `);

  console.log(data);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
