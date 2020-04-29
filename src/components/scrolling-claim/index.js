import React from "react"
import TextLoop from "react-text-loop"

import Logo from "../logo"

import "./scrolling-claim.scss"

export const ScrollingClaim = ({ staticText = "", scrollingText = [], hasLogoHiddenOnMobile = false, hasLogoTextOnly = false }) => {
  return (
    <div className="scrolling-claim">
      <div className={`scrolling-claim__logo ${hasLogoHiddenOnMobile ? "--hide-on-mobile" : ""}`}>
        <Logo className="h-5xl" isTextOnly={hasLogoTextOnly} />
      </div>
      <div className="scrolling-claim__static">
        {staticText}
      </div>
      <div className="scrolling-claim__scrolling">
        <TextLoop children={scrollingText} />
      </div>
    </div>
  )
}

export default ScrollingClaim
