import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import isInternal from "is-internal-link"

import useAllNavLinks from "./navigation-hook-use-all"
import "./navigation.scss"

const NavMobile = () => {
  const { navList } = useAllNavLinks()
  const navListliced = navList.slice(2, 5)

  return (
    <ul className="navMobile">
      {navList && navListliced.map(({ url, title }, n) => (
        <li className="navMobile__item" key={n}>
          {isInternal(url)
            ? <AnchorLink to={url} title={title} className="navMobile__item__link" />
            : <a href={url} target="_blank" rel="noopener noreferrer" title={title}
              className="navMobile__item__link">{title}</a>
          }
        </li>
      ))}
    </ul>
  )
}

export default NavMobile
