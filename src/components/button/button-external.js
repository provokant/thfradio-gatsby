import React from "react"

import "./button.scss"

export const ButtonExternal = ({ children, href, title }) => {
  return (
    <a
      className="cta"
      title={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <div className="cta__button">
        {children}
      </div>
    </a>
  )
}

export default ButtonExternal
