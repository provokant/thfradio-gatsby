import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "./button.scss"

export const Button = ({ title = "", children, onClick }) => {
  return (
    <button className="cta" title={title} onClick={onClick}>
      <div className="cta__button">
        {children}
      </div>
    </button>
  )
}

export const ButtonLink = ({ path, title = "", children }) => {
  return (
    <AnchorLink className="cta" to={path} title={title}>
      <div className="cta__button">
        {children}
      </div>
    </AnchorLink>
  )
}

export default ButtonLink