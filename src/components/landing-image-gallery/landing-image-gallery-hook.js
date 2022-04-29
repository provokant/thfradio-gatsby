import { graphql, useStaticQuery } from 'gatsby';

const useImages = () => {
  return useStaticQuery(graphql`
    query LandingImageGallery {
      gridImage: file(relativePath: { eq: "landingpage.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
};

export default useImages;
