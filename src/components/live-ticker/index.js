import React from "react"
//import moment from "moment"
import dayjs from "dayjs"
//import localization from "moment/locale/de"
import 'dayjs/locale/de'
import Marquee from "react-marquee-double"

import useAllShows from "../timetable/timetable-hook-all-shows"

import "./live-ticker.scss"

//moment.updateLocale("de", localization)
dayjs.locale('de')

export const LiveTicker = () => {
  const { nowPlaying, nextPlaying } = useAllShows()

  const message = nowPlaying ? `
      LIVE FROM AIRPORT BERLIN <b><i>NOW:&nbsp;&nbsp;&nbsp;&nbsp;</i></b>
      <i>${nowPlaying.summary}
      ${dayjs(nowPlaying.start).format("HH:mm")}-${dayjs(nowPlaying.end).format("HH:mm")}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <b>next show:</b>
      ${nextPlaying.summary}
      ${dayjs(nextPlaying.start).format("HH:mm")}-${dayjs(nextPlaying.end).format("HH:mm")}
      </i>
    ` : `
      <b>NOW PLAYING THF RADIO ARCHIVE</b> – <b>next show</b>
      on
      ${dayjs(nextPlaying.start).format("dddd, HH:mm")}
      <i>${nextPlaying.summary}</i>
      –
    `

  return (
    <div className="live-ticker">
      <Marquee
        step={1}
        space={100}
        interval={20}
        autoStart={true}
        direction={"left"}
        delay={1000}
      >
        <span dangerouslySetInnerHTML={{ __html: message }} />
      </Marquee>
    </div>
  )
}

export default LiveTicker
