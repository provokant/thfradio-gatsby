import React from "react"

import TextScroller from "./../../atoms/text-scroller/text-scroller.atom"
import Logo from "../logo"
import Container from "../container"

import "./scrolling-claim.scss"

const ScrollingClaim = ({ staticText = "", scrollingText = [], hasLogoHiddenOnMobile = false, hasLogoTextOnly = false }) => {
  return (
    <div className="scrolling-claim">
      <Container>
        <div className={`scrolling-claim__logo ${hasLogoHiddenOnMobile ? "--hide-on-mobile" : ""}`}>
          <Logo className="h-5xl" isTextOnly={hasLogoTextOnly} />
        </div>
        <div className="scrolling-claim__inner">
          <div className="scrolling-claim__inner__static">
            {staticText}
          </div>
          <div className="scrolling-claim__inner__scrolling">
            <TextScroller text={scrollingText} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ScrollingClaim
