import React, { useState } from "react"
import { Link } from "gatsby"
import Confetti from "react-dom-confetti"

import Navigation from "./../navigation"
import Container from "./../container"
import Logo from "./../logo"

import "./footer.scss"
import useAllStaticLinks from "./footer-hook-use-all-static-links"

export const Footer = () => {
  const confettiConfig = {
    angle: 90,
    spread: "104",
    startVelocity: "31",
    elementCount: "44",
    dragFriction: 0.1,
    duration: 3000,
    stagger: "11",
    width: "6px",
    height: "6px",
    colors: ["#cc0a4d", "#ffdbe7", "#fffff", "#6b7fee", "#bb0025"]
  }
  const [clicked, countClicks] = useState(0)
  const [isActive, setActive] = useState(0)
  
  const handleClick = (e) => {
    (clicked % 5 !== 0) && e.preventDefault()

    setActive(true)
    setTimeout(() => setActive(false), 200)
    countClicks(n => n = n + 1)
  }

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
            <Navigation />
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
          <Logo isInverted/>
        </div>
      </Container>
      <Container>
        <div className="footer__credits">
          Diese Webseite wurde entwickelt mit freundlicher Unterstützung von 

          <a href="//dailysh.it" target="_blank" rel="noopener noreferrer"  onClick={handleClick} className="footer__credits__nls">
            <nobr>
              NEXT LEVEL SHIT ({clicked})
              <Confetti active={isActive} config={confettiConfig} className="footer__credits__nls__confetti" />
            </nobr>
          </a>

          und dem Einsatz von Open-Source Software. Der <a href="//github.com/nextlevelshit/nls-gatsby-thfradio">Code ist frei verfügbar auf GitHub</a>.
        </div>
      </Container>
    </footer>
  )
}

export default Footer
