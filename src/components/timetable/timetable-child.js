import React from "react"
import moment from "moment"
import localization from "moment/locale/de"

import "./timetable.scss"

moment.updateLocale("de", localization)

export const TimetableChild = ({ summary, start, end, uid }) => {
  const TCDate = () =>
    <div className="timetable__child__date">
      <nobr>
        {moment(start).format("HH:mm")}
        &nbsp;____________&nbsp;
        {moment(end).format("HH:mm")}  
      </nobr> 
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