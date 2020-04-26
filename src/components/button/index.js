import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "./button.scss"

const Button = ({ title = "", children }) => {
  return (
    <button className="cta" title={title}>
      <div className="cta__button">
        {children}
      </div>
    </button>
  )
}

const ButtonLink = ({ path, title = "", children }) => {
  return (
    <AnchorLink className="cta" to={path} title={title}>
      <div className="cta__button">
        {children}
      </div>
    </AnchorLink>
  )
}

export default { Button, ButtonLink }