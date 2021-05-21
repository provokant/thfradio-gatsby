import React from "react"

import "./paragraph.scss"

const Paragraph = ({ text, hasSmallText = false, isNarrow = false, isLarge = false, children }) => (
  <p className={`
      paragraph
      ${hasSmallText ? "--small" : ""}
      ${isNarrow ? "--narrow" : ""}
      ${isLarge ? "--large" : ""}
    `}>
    {children ? children : text}
  </p>
)

export default Paragraph
