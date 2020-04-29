import React, { useContext } from "react"
import Img from "gatsby-image"
import moment from "moment"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/global-context-provider"
import PlayCircle from "../../images/play-circle.svg"

import "./archive.scss"

const ShowsChild = ({
  date, 
  name,
  pictures,
  url
}) => {
  const dispatch = useContext(GlobalDispatchContext)
  
  const { archivePlays } = useContext(GlobalStateContext)
  const isPlaying = archivePlays === url
                                                                          
  const togglePlayer = () => {
    dispatch({ type: "TOGGLE_ARCHIVE_PLAYER", payload: url })
  }

  return (
    <>
      {/* // eslint-disable-next-line */}
      <button className={`archive-child ${isPlaying ? "--active" : ""}`} role="play" onClick={togglePlayer}>
        <div className="archive-child__cover">
          <div className="archive-child__cover__image">
            {pictures && <Img fluid={pictures.childImageSharp.fluid} />}
          </div>
          <div className="archive-child__cover__icon">
            <PlayCircle />
          </div>
        </div>
        <div className="archive-child__content">
          <div className="archive-child__content__title">{name}</div>
          <div className="archive-child__content__date">
            {moment(date).format("DD.MM.YYYY")}
          </div>
        </div>
      </button>
    </>
  )
}

export default ShowsChild