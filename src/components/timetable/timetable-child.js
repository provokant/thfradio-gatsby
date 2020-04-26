import React from "react"
import moment from "moment"
import localization from "moment/locale/de"
import WaveIcon from "../../images/wave.svg"

import "./timetable.scss"

moment.updateLocale("de", localization)

export const TimetableChild = ({ summary, start, end, uid }) => {
  const TCDate = () =>
    <div className="timetable__child__date">
      {moment(start).format("HH:mm")}
      <WaveIcon className="timetable__child__date__icon" />
      {moment(end).format("HH:mm")}
    </div>

  const TCSummary = () =>
    <div className="timetable__child__summary">
      {summary}
    </div>

  const TCContainer = ({ children }) =>
    <div className="timetable__child" key={uid}>
      {children}
    </div>

  return (
    <TCContainer>
      <TCDate />
      <TCSummary />
    </TCContainer>
  )
}

export default TimetableChild