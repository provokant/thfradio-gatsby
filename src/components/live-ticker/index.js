import React from "react"
import moment from "moment"
import localization from "moment/locale/de"
import Marquee from "react-marquee-double"

import useAllShows from "../timetable/timetable-hook-all-shows"

import "./live-ticker.scss"

moment.updateLocale("de", localization)

export const LiveTicker = () => {
  const { nowPlaying, nextPlaying } = useAllShows()

  const message = nowPlaying ? `
      NOW LIVE ON AIR-PORT:
      <b>${nowPlaying.summary}</b>
      von
      ${moment(nowPlaying.start).format("HH:mm")}
      bis
      ${moment(nowPlaying.end).format("HH:mm")}
      Uhr
      –
    ` : `
      NOW PLAYING THF RADIO ARCHIVE – <b>Nächste Show
      am
      ${moment(nextPlaying.start).format("dddd, HH:mm")} Uhr</b>
      <i>${nextPlaying.summary}</i>
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
