import React from "react"

import "./paragraph.scss"

const Paragraph = ({ text, hasSmallText = false, isNarrow = false, children }) => (
    <p className={`paragraph ${hasSmallText ? "--small" : ""} ${isNarrow ? "--narrow" : ""}`}>
      {children ? children : text}
    </p>
  )

export default Paragraph