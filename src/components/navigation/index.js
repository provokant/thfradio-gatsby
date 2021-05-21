import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import isInternal from "is-internal-link"

import useAllNavLinks from "./navigation-hook-use-all"
import "./navigation.scss"

const Navigation = () => {
  const { navList } = useAllNavLinks()

  return (
    <ul className="nav">
      {navList && navList.map(({ url, title }, n) => (
        <li className="nav__item" key={n}>
          {isInternal(url)
            ? <AnchorLink to={url} title={title} className="nav__item__link"/>
            : <a href={url} target="_blank" rel="noopener noreferrer" title={title}
                 className="nav__item__link">{title}</a>
          }
        </li>
      ))}
    </ul>
  )
}

export default Navigation
