import React, {useEffect, useState} from "react"
import moment from "moment"
import localization from "moment/locale/de"
import Marquee from "react-marquee-double"

import useAllShows from "../timetable/timetable-hook-all-shows"

import "./live-ticker.scss"

moment.updateLocale("de", localization)

export const LiveTicker = () => {
  const { nowPlaying, nextPlaying } = useAllShows()

  const message = (now, next) => now ? `
      LIVE FROM AIRPORT BERLIN <b><i>NOW:&nbsp;&nbsp;&nbsp;&nbsp;</i></b>
      <i>${now.summary}
      ${moment(now.start).format("HH:mm")}-${moment(now.end).format("HH:mm")}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <b>Next show:</b>
      ${next.summary}
      ${moment(next.start).format("HH:mm")}-${moment(next.end).format("HH:mm")}
      </i>
    ` : `
      <b>NOW PLAYING THF RADIO ARCHIVE</b> – <b>Next show</b>
      on
      ${moment(next.start).format("dddd, HH:mm")}
      <i>${next.summary}</i>
      –
    `
    const ticker = message => (
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


  const [tickerDiv, setTickerDiv] = useState(ticker(message(nowPlaying,nextPlaying)))
    
  useEffect(()=>{setTickerDiv(ticker(message(nowPlaying,nextPlaying)))}, [nowPlaying,nextPlaying])
  
  console.log(tickerDiv)

  return tickerDiv
}

export default LiveTicker
