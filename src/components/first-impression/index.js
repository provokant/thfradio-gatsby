import React from "react"
import Container from "../container"
import Section from "../section"
import "./first-impression.scss"
import Img from "gatsby-image"
import ButtonLink from "../button/index"
import BackgroundImage from "gatsby-background-image"
import useBackgroundImages from "./first-impression-hook-images"
import useSingleImage from "./first-impression-hook-single-image"
// import FirstImpresssionSlider from "./slider"

export const FirstImpression = () => {
  const { imageDefault } = useBackgroundImages()
  const { gridImage } = useSingleImage()

  return (
    <Section
      title="first impression"
      id="first-impression"
      className="first-impression">

    <BackgroundImage
      Tag="section"
      id="first-impression"
      className="first-impression__mobile"
      fluid={imageDefault.childImageSharp.fluid}>
      <Container>
          <div className="first-impression__mobile__claim">
                <p>Wir sind ein Community Radio im Torhaus am Flughafen Tempelhof</p>
            </div>
      </Container>
      </BackgroundImage>

      <Container>
        <div className="first-impression__grid">
            <div className="first-impression__grid__claim">
                <p>Wir sind ein Community Radio im Torhaus am Flughafen Tempelhof</p>
            </div>
            <div className="first-impression__grid__picture">
            <Img fluid={gridImage.childImageSharp.fluid} alt="THF Radio, Torhaus Berlin"/>
            </div>
            <ButtonLink
                title="Über uns"
                path="/info">
                    <span>Über uns</span>
              </ButtonLink>
            <ButtonLink
                title="Aus dem Archiv"
                path="/#archive">
                    <span>Aus dem Archiv</span>
                    </ButtonLink>
        </div>
      </Container>

    </Section>
  )
}

export default FirstImpression
