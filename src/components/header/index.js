import React, { useContext } from "react"

import Logo from "../logo"
import Navigation from "../navigation"
import LiveRadio from "../live-radio"
import Container from "../container"
import LiveTicker from "../live-ticker"
import {
  // GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/global-context-provider"

import "./header.scss"

const Header = () => {
  // const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const { isArchivePlayerPlaying } = state

  // console.log(state)

  return (
    <header className="header">
      <Container>
        <div className="header__logo">
          <Logo />
        </div>
        <nav role="navigation" className="header__nav">
          <Navigation />
        </nav>
        <div className="header__live">
          {isArchivePlayerPlaying ? "ARCHIVE PLAYING…" : <LiveRadio />}
        </div>
      </Container>
      <LiveTicker />
    </header>
  )
}

export default Header
