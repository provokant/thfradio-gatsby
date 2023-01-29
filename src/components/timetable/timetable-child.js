import React from "react"
//import moment from "moment"
import dayjs from "dayjs"
//import localization from "moment/locale/de"
import WaveIcon from "../../images/wave.svg"
import 'dayjs/locale/de'
import "./timetable.scss"


dayjs.locale('de')
// import localization from "moment/locale/de"


// moment.updateLocale("de", localization)

export const TimetableChild = ({ summary, start, end, uid }) => {
  const TCDate = () =>
    <div className="timetable__child__date">
      {dayjs(start).format("HH:mm")}
      <WaveIcon className="timetable__child__date__icon"/>
      {dayjs(end).format("HH:mm")}
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
      <TCDate/>
      <TCSummary/>
    </TCContainer>
  )
}

export default TimetableChild
