import React from "react"

import "./headline.scss"

const Headline = ({ title, textColor, sub = `` }) => {
  return (
    <div className="headline">
      {sub.length > 0 &&
      <div className="headline__sub">{sub}</div>
      }
      <h2 className={`headline__title text-${textColor}`}>{title}</h2>
    </div>
  )
}

export default Headline

