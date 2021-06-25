import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import isInternal from "is-internal-link"

import useAllNavLinks from "./navigation-hook-use-all"
import "./navigation.scss"

const NavigationFooter = () => {
  const { navList } = useAllNavLinks()

  return (
    <ul className="navFooter">
      {navList && navList.map(({ url, title }, n) => (
        <li className="navFooter__item" key={n}>
          {isInternal(url)
            ? <AnchorLink to={url} title={title} className="navFooter__item__link"/>
            : <a href={url} target="_blank" rel="noopener noreferrer" title={title}
                 className="navFooter__item__link">{title}</a>
          }
        </li>
      ))}
    </ul>
  )
}

export default NavigationFooter
