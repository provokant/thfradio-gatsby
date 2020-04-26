import React from "react"

import "./timetable.scss"
import TimetableChild from "./timetable-child"

export const TimetableChildren = ({ shows }) => shows && 
  <div className="timetable__children">
    {shows.map(show => <TimetableChild key={show.key} {...show} />)}
  </div>

export default TimetableChildren