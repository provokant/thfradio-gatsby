import React, { useState } from "react"

import Headline from "../headline"
import Paragraph from "../paragraph"
// import Image from "./../../atoms/image/image.atom"
import Container from "../container"

import "./accordion.scss"

const Accordion = ({
 uid,
 headline,
 subheadline,
 items,
 hasColorInverted = false
}) => {
  const [index, set] = useState(0)
  const changeState = (i) => set(state => i)

  const AccordionImage = ({ imagePath, title, i }) => {
    const isActive = index === i

    return (
      <>
        {/* {isActive
          ? <Image path={imagePath} alt={title} />
          : null
        } */}
      </>
    )
  }

  const AccordionItem = ({ title, copytext, i }) => {
    const isActive = index === i || false

    return (
      // eslint-disable-next-line
      <div className={`accordion__content__item ${isActive ? "--active" : ""}`} onClick={() => changeState(i)}>
        <button className="accordion__content__item__title">
          {title}
        </button>
        {isActive &&
        <div className="accordion__content__item__text">
          <Paragraph text={copytext} hasSmallText/>
        </div>
        }
      </div>
    )
  }

  return (
    <section className={`accordion ${hasColorInverted ? "--inverted" : ""}`} id={uid}>
      <Container>
        <div className="accordion__content">
          <Headline title={headline}></Headline>
          <Paragraph text={subheadline}/>
          {items && items.map((item, i) => <AccordionItem {...item} i={i}/>)}
        </div>
        <div className="accordion__image">
          {items && items.map((item, i) => <AccordionImage {...item} i={i}/>)}
        </div>
      </Container>
    </section>
  )
}

export default Accordion
