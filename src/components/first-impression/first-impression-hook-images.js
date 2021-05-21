import { graphql, useStaticQuery } from "gatsby"

const useBackgroundImages = () => {
  return useStaticQuery(graphql`
    query LandingPageQuery {
      imageDefault: file(relativePath: {eq: "landingpage.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      },
      imageDark: file(relativePath: {eq: "landingpage-dark.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
}

export default useBackgroundImages
