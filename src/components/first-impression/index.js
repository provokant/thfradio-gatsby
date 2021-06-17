import React from "react"
import Container from "../container"
import ScrollingClaim from "../scrolling-claim"
import Section from "../section"
import "./first-impression.scss"
import Img from "gatsby-image"
import useSingleImage from "./first-impression-hook-single-image"

export const FirstImpression = () => {
  const { imageDefault } = useSingleImage()
  return (
    <Section
      title="first impression"
      id="first-impression"
      className="first-impression"
    >
      <Container>
        <div className="grid grid-cols-2">
          <div className="border-8 border-white text-center">
            <ScrollingClaim staticText="Wir sind ein Community Radio im Torhaus am Flughafen Tempelhof"/>
          </div>
          <div className="border-8 border-white">
            <Img fluid={imageDefault} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default FirstImpression
