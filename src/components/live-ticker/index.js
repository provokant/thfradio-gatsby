import React from "react"
import Marquee from "react-double-marquee"
import moment from "moment"
import localization from "moment/locale/de"

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
      NOW PLAYING AWESOME MUSIC – <b>Nächste Show
      am
      ${moment(nextPlaying.start).format("dddd, HH:mm")} Uhr</b>
      <i>${nextPlaying.summary}</i>
      –
    `

  return (
    <div className="live-ticker">
      <Marquee direction="left">
        <span dangerouslySetInnerHTML={{ __html: message }} />
      </Marquee>
    </div>
  )
}

export default LiveTicker