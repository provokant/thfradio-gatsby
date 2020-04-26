import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import useAllNavLinks from "./navigation-hook-use-all"
import "./navigation.scss"

const Navigation = () => {
  const { navList } = useAllNavLinks()

  return (
    <ul className="nav">
      {navList && navList.map(({ url, title }, n) => (
        <li className="nav__item" key={n}>
          <AnchorLink to={url} title={title} className="nav__item__link" />
        </li>
      ))}
    </ul>
  )
}

export default Navigation
