import React, { useContext, useRef } from "react"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/src/styles.scss"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/global-context-provider"

import "./live-radio.scss"

export const LiveRadio = () => {  
  const dispatch = useContext(GlobalDispatchContext)
  const { archivePlays } = useContext(GlobalStateContext)
  const player = useRef(null)

  if (archivePlays && player.current) {
    player.current.audio.current.pause()
  }

  return (
    <AudioPlayer
      src={process.env.GATSBY_LIVE_RADIO_API}
      layout="horizontal"
      customAdditionalControls={[]}
      customProgressBarSection={[]}
      className="live-radio"
      onPause={e => dispatch({ type: "PAUSE_LIVE_RADIO" })}
      onPlay={e => dispatch({ type: "PlAY_LIVE_RADIO" })}
      ref={player}
    />
  )
}

export default LiveRadio