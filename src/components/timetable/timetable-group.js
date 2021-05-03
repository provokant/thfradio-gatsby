import React from "react"
import moment from "moment"
import localization from "moment/locale/de"

import "./timetable.scss"
import TimetableChildren from "./timetable-children"

moment.updateLocale("de", localization)

export const TimetableGrouped = ({ by }) => by &&
  Object.entries(by).map(([date, shows], i) => (
    <div role="presentation" className={`
      timetable__group
      ${moment().diff(moment(date), "week") % 2 !== 0 ? " --variant" : ""}
      ${moment().diff(moment(date), "day") > 0 ? " --passed" : ""}
    `}>
      <TimetableGroupTitle date={date} />
      <TimetableChildren shows={shows} key={i} />
    </div>
  )
)

export const TimetableGroupTitlePrefix = ({ date }) => {
  const diffWeeks = moment().diff(date, "week")
  const diffDays = moment().diff(date, "day")

  return (
    <>
      {diffDays > 0 && "Letzten "}
      {(diffWeeks === 0 && diffDays <= 0) && " "}
      {diffWeeks === -1 && " "}
      {diffWeeks === -2 && " "}
      {diffWeeks < -2 && " "}
    </>
  )
}

export const TimetableGroupTitleWeekday = ({ date }) => (
  <strong>{moment(date).format("dddd")}</strong>
)

export const TimetableGroupTitleSuffix = ({ date }) => (
  <>
    {moment().diff(date, "week") < -2 && " in der Zukunft"}
  </>
)

export const TimetableGroupTitle = ({ date }) =>
  <div className="timetable__group__title">
    <div className="timetable__group__title__dom">
      <TimetableGroupTitlePrefix date={date} />
      <TimetableGroupTitleWeekday date={date} />
      <TimetableGroupTitleSuffix date={date} />
    </div>
    
    <div className="timetable__group__title__sub">
      {moment(date).format("DD.MM.YYYY")}
    </div>
  </div>

export default TimetableGrouped