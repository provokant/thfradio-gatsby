import React from "react"
import { Link } from "gatsby"

import Navigation from "./../navigation"
import Container from "./../container"
import LogoDark from '../logo/logo-dark'


import "./footer.scss"
import useAllStaticLinks from "./footer-hook-use-all-static-links"

export const Footer = () => {
  const { allLinksByLang } = useAllStaticLinks()
  const staticPageLinks = allLinksByLang("de").map(({ path, context }) => {
    return (
      <Link to={path}>
        {context.title}
      </Link>
    )
  })

  return (
    <footer className="footer">
      <Container>
        <div className="footer__nav">
          <div className="footer__nav__main">
            <Navigation/>
          </div>
          {staticPageLinks &&
          <ul className="footer__nav__secondary">
            {staticPageLinks.map((link, n) => (
              <li key={n}>{link}</li>
            ))}
          </ul>
          }
        </div>
        <div className="footer__logo">
          <LogoDark isInverted/>
        </div>
      </Container>
      <Container>
        <div className="footer__credits">
          Diese Webseite wurde entwickelt von <a href="//dailysh.it" target="_blank" rel="noopener noreferrer">
          <nobr>NEXT LEVEL SHIT</nobr>
        </a> unter dem Einsatz von Open-Source Software. Der <a href="//github.com/nextlevelshit/nls-gatsby-thfradio">Code
          ist frei verfügbar auf GitHub</a>.
        </div>
      </Container>
    </footer>
  )
}

export default Footer
