import React, { useContext, useRef } from "react"
import Img from "gatsby-image"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/global-context-provider"

import "./shows.scss"

const ShowsChild = ({
  audio_length, 
  date, 
  name, 
  link,
  slug, 
  pictures,
  url,
}) => {

  const dispatch = useContext(GlobalDispatchContext)
  const { isLiveRadioPaused } = useContext(GlobalStateContext)
  const player = useRef(null)

  const toggleShow = (payload) => {
    dispatch({ type: "TOGGLE_ARCHIVE_PLAYER", payload })

    if (window.Mixcloud) {
      // const wrapperElement = document.querySelector(".shows-child__content")
      // console.log(window.Mixcloud.navigate())
      // window.Mixcloud.FooterWidget(wrapperElement)
      // const x = document.createElement("div")
      // x.classList.add("mixcloud-footer-widget-container")
      // console.log(x)
      // document.querySelector(".mixcloud-footer-widget-container").remove()
      // document.body.appendChild(x)
      // const widget = window.Mixcloud.FooterWidget(link)
      // const player = window.Mixcloud.PlayerWidget(wrapperElement)
      // console.log(window.Mixcloud.FooterWidget())
      // widget.ready.then(function() {
      //   console.log("test")
      //     // Put code that interacts with the widget here
      // })
    }
  }

  return (
    <button className="shows-child" role="play" data-mixcloud-play-button={link}onClick={() => toggleShow(slug)}>
      <iframe ref={player} />
      <div className="shows-child__cover">
        {pictures && <Img fluid={pictures.childImageSharp.fluid} />}
      </div>
      <div className="shows-child__content">
        <div className="shows-child__content__title">{isLiveRadioPaused}</div>
        <div className="shows-child__content__length">{audio_length}</div>
        <div className="shows-child__content__date">{date}</div>
      </div>
    </button>
  )
}

export default ShowsChild