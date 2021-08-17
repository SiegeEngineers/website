import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          siteCoverImage
          authorName
          authorAvatar
          authorDescription
          siteDescription
          twitterUsername
          defaultLang
          navBarLogo
          blogPostPathPrefix
        }
      }
    }
  `);
  return result.site.siteMetadata;
};

export default useSiteMetadata;
