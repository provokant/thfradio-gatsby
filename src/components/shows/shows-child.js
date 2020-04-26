import React, { useContext } from "react"
import Img from "gatsby-image"
import { navigate } from "gatsby"
import moment from "moment"

import {
  GlobalDispatchContext,
  // GlobalStateContext,
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
  // const { isLiveRadioPaused } = useContext(GlobalStateContext)

  const toggleShow = (payload) => {
    dispatch({ type: "TOGGLE_ARCHIVE_PLAYER", payload })

    if (!window.Mixcloud) {
      console.log("test")
      navigate(url)
    }
  }

  return (
    <button className="shows-child" role="play" data-mixcloud-play-button={link}onClick={() => toggleShow(slug)}>
      <div className="shows-child__cover">
        {pictures && <Img fluid={pictures.childImageSharp.fluid} />}
      </div>
      <div className="shows-child__content">
        <div className="shows-child__content__title">{name}</div>
        {/* <div className="shows-child__content__length">{audio_length}</div> */}
        <div className="shows-child__content__date">
          Aufzeichnung vom {moment(date).format("DD.MM.YYYY")}
        </div>
      </div>
    </button>
  )
}

export default ShowsChild