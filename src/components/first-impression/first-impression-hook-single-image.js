import { graphql, useStaticQuery } from "gatsby"

const useSingleImage = () => {
  return useStaticQuery(graphql`
    query SingleImageQuery {
      imageDefault:file(relativePath: {eq: "landingpage.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      },
    }
  `)
}

export default useSingleImage
