import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const useLogoImages = () => {
  return useStaticQuery(graphql`
    query LogoImages {
      logoDefault: file (relativePath: { eq: "logo_black.png" }) {
        childImageSharp {
          fixed(width: 140, height: 33) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      logoDark: file (relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fixed(width: 140, height: 33) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
}

export default useLogoImages
