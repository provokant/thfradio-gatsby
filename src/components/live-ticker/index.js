import React from "react"
import moment from "moment"
import localization from "moment/locale/de"
import Marquee from "react-marquee-double"

import useAllShows from "../timetable/timetable-hook-all-shows"

import "./live-ticker.scss"

moment.updateLocale("de", localization)

export const LiveTicker = () => {
  const { nowPlaying, nextPlaying } = useAllShows()
  console.log('now', nowPlaying)
  console.log('nowBoolean', !!nowPlaying)
  console.log('next',nextPlaying)
  console.log('nextBoolean', !!nextPlaying)

  const message = nowPlaying ? `
      <b>NOW LIVE ON AIRPORT:</b>
     ${nowPlaying.summary}
      from
      ${moment(nowPlaying.start).format("HH:mm")}
      to
      ${moment(nowPlaying.end).format("HH:mm")}
      –
    ` : `
      <b>NOW PLAYING THF RADIO ARCHIVE</b> – Next show
      on
      ${moment(nextPlaying.start).format("dddd, HH:mm")}
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
