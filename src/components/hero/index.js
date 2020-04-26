import React from "react"

import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title">
        Dir liegt ein Thema am Herzen? Schreib uns und wir erwähnen es in der nächsten Sendung.
      </div>
      <a href="/#" className="hero__button">
        <span className="hero__button__text">Schreib uns</span>
        <span className="hero__button__icon">»</span>
      </a>
    </div>
  )
}

export default Hero
