import React, {useState} from "react"
import moment from "moment"
import localization from "moment/locale/de"
import Marquee from "react-marquee-double"

import useAllShows from "../timetable/timetable-hook-all-shows"

import "./live-ticker.scss"

moment.updateLocale("de", localization)

export const LiveTicker = () => {
  const { nowPlaying, nextPlaying } = useAllShows()

  const [currentShow] = useState(nowPlaying)
  const [nextShow] = useState(nextPlaying)


  console.log("now", currentShow)
  console.log("next", nextShow)

  console.log(currentShow? true: false)

  const message = nowPlaying ? `
      <b>NOW LIVE ON AIRPORT:</b>
     ${currentShow.summary}
      from
      ${moment(currentShow.start).format("HH:mm")}
      to
      ${moment(currentShow.end).format("HH:mm")}
      –
    ` : `
      <b>NOW PLAYING THF RADIO ARCHIVE</b> – Next show
      on
      ${moment(nextShow.start).format("dddd, HH:mm")}
      <i>${nextShow.summary}</i>
      –
    `

  
  return (
    <div className="live-ticker">
      <Marquee
        step={1}
        space={5}
        interval={20}
        autoStart={true}
        direction={"left"}
        delay={1000}
      >
        <span dangerouslySetInnerHTML={{ __html: message }}/>
      </Marquee>
    </div>
  )
}

export default LiveTicker
