import React from "react"

import TextScroller from "../text-scroller"
import Logo from "../logo"

import "./scrolling-claim.scss"

export const ScrollingClaim = ({ staticText = "", scrollingText = [], hasLogoHiddenOnMobile = false, hasLogoTextOnly = false }) => {
  return (
    <div className="scrolling-claim">
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
    </div>
  )
}

export default ScrollingClaim
