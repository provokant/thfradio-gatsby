import React from "react"
import BackgroundImage from "gatsby-background-image"

import Container from "../container"
import Paragraph from "../paragraph"
import ScrollingClaim from "../scrolling-claim"
import WaveBackground from "../../images/wave-bg.svg"
import WaveIcon from "../../images/wave.svg"

import "./first-impression.scss"
import useBackgroundImages from "./first-impression-hook-images"

export const FirstImpression = ({ hasDarkBackground = false }) => {
  const { imageDefault } = useBackgroundImages()
  
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
      fluid={imageDefault.childImageSharp.fluid}
    >
      <Container>
        <div className="first-impression__claim">
          <ScrollingClaim staticText="ist das Sprachrohr für" scrollingText={scrollingText} />
        </div>
        <WaveIcon className="first-impression__icon" />
        <div class="first-impression__paragraph">
          <Paragraph isLarge isNarrow text="THF Radio ist die Radiostation im ehemaligen Pförtnerinnenhaus am Flughafen Tempelhof. Experimentierraum und Sprachrohr für Bürger*innen, Künstler*innen, Musiker*innen, Kreative und Initiativen. Wir sind Teil des TORHAUSES am Flughafen Tempelhof." />
        </div>
      </Container>
      <WaveBackground class="first-impression__wave" />
    </BackgroundImage>
  )
}

export default FirstImpression
