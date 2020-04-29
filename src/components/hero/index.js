import React, { useState } from "react"
import Confetti from "react-dom-confetti"
import MousePointer from "../../images/mouse-pointer.svg"

import "./hero.scss"

const Hero = () => {
  const confettiConfig = {
    angle: 90,
    spread: "104",
    startVelocity: "31",
    elementCount: "44",
    dragFriction: 0.1,
    duration: 3000,
    stagger: "11",
    width: "6px",
    height: "6px",
    colors: ["#cc0a4d", "#ffdbe7", "#fffff", "#6b7fee", "#bb0025"]
  }
  const [clapped, setClaps] = useState(0)
  const [isActive, setActive] = useState(0)

  const handleClick = (e) => {
    (clapped < 30) && e.preventDefault()

    setActive(true)
    setTimeout(() => setActive(false), 200)
    setClaps(n => n = n + 1)
  }

  return (
    <div className="hero">
      <div className="hero__title">
        Dir gefällt was wir machen? Wir freuen uns über deinen Applaus <span role="img" ariab-labe="Clapping hands">👏</span>
      </div>
      <a href="https://clickheretosavetheworld.com/" onClick={handleClick} className="hero__button" target="_blank" rel="noopener noreferrer">
        <Confetti active={isActive} config={confettiConfig} className="hero__button__confetti" />
        <span className="hero__button__text">
          {clapped === 0 && <>Clap your hands!</>}
          {clapped === 1 && <>1 Clap</>}
          {clapped > 1 && <>{clapped} Claps</>}
          {clapped > 20 && <>.</>}
          {clapped > 21 && <>.</>}
          {clapped > 22 && <>.</>}
          {clapped > 23 && <>.</>}
          {clapped > 25 && <>.</>}
          {clapped > 27 && <>.</>}
        </span>
        <MousePointer className={`hero__button__icon ${clapped && "--clapped"}`} />
      </a>
    </div>
  )
}

export default Hero
