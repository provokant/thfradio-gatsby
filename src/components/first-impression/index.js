import React from "react"
import BackgroundImage from "gatsby-background-image"

// import ButtonLink from "../button"
import Container from "../container"

import "./first-impression.scss"
import useBackgroundImages from "./first-impression-hook-images"

const FirstImpression = ({ hasDarkBackground = false }) => {
  const { imageDefault, imageDark } = useBackgroundImages()
  const image = hasDarkBackground ? imageDark : imageDefault

  return (
    <BackgroundImage 
      Tag="section"
      id="first-impression"
      className="first-impression"
      fluid={image.childImageSharp.fluid}
    >
      <Container>
        <div className="first-impression__button">
          {/* <ButtonLink path="/#usecases" title="Schau dir die Anwendungsfälle von Webro an!">
            Oha. Mehr davon 🤙
          </ButtonLink> */}
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default FirstImpression
