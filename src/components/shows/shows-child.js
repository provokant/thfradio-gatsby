import React, { useContext, useState } from "react"
import Img from "gatsby-image"
import moment from "moment"
import PlayCircle from "../../images/play-circle.svg"

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
  const [isPlaying, set] = useState(false)
  
  const { archivePlays } = useContext(GlobalStateContext)

  if (isPlaying && archivePlays && archivePlays !== slug) {
    set(state => false)
  }                                                                             

  const toggleShow = (payload) => {
    // Toggle global dispatcher
    dispatch({ type: "TOGGLE_ARCHIVE_PLAYER", payload })
    // Toggle isPlaying state
    set(state => !state)
    // Remove focus if not playing
    if(isPlaying) {
      document.activeElement.blur()
    }
    // Fallback if footer widget not working
    if (!window.Mixcloud) {
      window.open(url, "_blank")
    }
  }

  return (
    // eslint-disable-next-line
    <button className={`shows-child ${isPlaying && "--active"}`} role="play" data-mixcloud-play-button={link} onClick={() => toggleShow(slug)}>
      <div className="shows-child__cover">
        <div className="shows-child__cover__image">
          {pictures && <Img fluid={pictures.childImageSharp.fluid} />}
        </div>
        <div className="shows-child__cover__icon">
          <PlayCircle />
        </div>
      </div>
      <div className="shows-child__content">
        <div className="shows-child__content__title">{name}</div>
        {/* <div className="shows-child__content__length">{audio_length}</div> */}
        <div className="shows-child__content__date">
          {moment(date).format("DD.MM.YYYY")}
        </div>
      </div>
    </button>
  )
}

export default ShowsChild