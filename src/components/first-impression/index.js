import React from "react"
import BackgroundImage from "gatsby-background-image"

import Container from "../container"
import Paragraph from "../paragraph"
import ScrollingClaim from "../scrolling-claim"

import "./first-impression.scss"
import useBackgroundImages from "./first-impression-hook-images"

export const FirstImpression = ({ hasDarkBackground = false }) => {
  const { imageDefault, imageDark } = useBackgroundImages()
  const image = hasDarkBackground ? imageDark : imageDefault
  const scrollingText = [
    "Bürger*innen",
    "Kreative",
    "Initiativen"
  ]

  return (
    <BackgroundImage 
      Tag="section"
      id="first-impression"
      className="first-impression"
      fluid={image.childImageSharp.fluid}
    >
      <Container>
        <div className="first-impression__claim">
          <ScrollingClaim staticText="ist für" scrollingText={scrollingText} />
        </div>
        <div class="first-impression__paragraph">
          <Paragraph isLarge isNarrow text="THF Radio ist die Radiostation im ehemaligen Pförtnerinnenhaus am Flughafen Tempelhof. Experimentierraum und Sprachrohr für Bürger*innen, Künstler*innen, Musiker*innen, Kreative und Initiativen. Wir sind Teil des TORHAUSES am Flughafen Tempelhof." />
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default FirstImpression
