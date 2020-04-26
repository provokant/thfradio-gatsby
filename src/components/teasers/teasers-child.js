import React from "react"

import Headline from "./../headline"
import Paragraph from "../paragraph"
// import Image from "../../atoms/image/image.atom"

import "./teasers-child.scss"

const TeasersChild = ({ 
  uid,
  headline, 
  subheadline,
  copytext,
  imageSrc,
  imageAlt,
  hasTextRight = false,
  hasBackground = false
}) => {
  return (
    <section className={`teaser-child ${hasBackground ? "--has-background" : ""}`} id={uid}>
      <div className={`container ${hasTextRight ? "--has-text-right" : ""}`}>
        <div className="teaser-child__column">
          <Headline title={headline} sub={subheadline}></Headline>
          <Paragraph text={copytext} isNarrow />
        </div>
        <div className="teaser-child__column">
          {/* <Image path={imageSrc} alt={imageAlt} /> */}
        </div>
      </div>
    </section>
  )
}

export default TeasersChild