import React from "react"
import BackgroundImage from "gatsby-background-image"

import Container from "../container"
import ScrollingClaim from "../scrolling-claim"

import "./first-impression.scss"
import useBackgroundImages from "./first-impression-hook-images"

export const FirstImpression = () => {
  const { imageDefault } = useBackgroundImages()

  return (
    <BackgroundImage
      Tag="section"
      id="first-impression"
      className="first-impression"
      fluid={imageDefault.childImageSharp.fluid}
    >
      <Container>
        <div className="first-impression__claim">
          <ScrollingClaim staticText="Wir sind ein Community Radio im Torhaus am Flughafen Tempelhof"/>
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default FirstImpression
