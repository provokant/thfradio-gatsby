import React, { useContext } from "react"
import LogoImage from "../logo/logo-image"
import Navigation from "../navigation"
import LiveRadio from "../live-radio"
import Container from "../container"
import LiveTicker from "../live-ticker"
import { GlobalStateContext } from "../../context/global-context-provider"

import "./header.scss"

const Header = () => {
  const state = useContext(GlobalStateContext)
  const { isArchivePlayerPlaying } = state

  return (
    <header className="header">
      <Container>
        <div className="header__logo">
          <LogoImage/>
        </div>
        <nav role="navigation" className="header__nav">
          <Navigation/>
        </nav>
        <div className="header__ticker">
          <LiveTicker/>
        </div>
        <div className="header__live">
          {isArchivePlayerPlaying ? "ARCHIVE PLAYING…" : <LiveRadio/>}
        </div>
      </Container>
    </header>
  )
}

export default Header
