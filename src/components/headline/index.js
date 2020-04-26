import React from "react"

import "./headline.scss"

const Headline = ({ title, sub = `` }) => {
  return (
    <div className="headline">
      {sub.length > 0 && 
        <div className="headline__sub">{sub}</div>
      }
      <h2 className="headline__title">{title}</h2>
    </div>
  )
}

export default Headline