import React from "react"
import dayjs from "dayjs"
import 'dayjs/locale/de'

import './timetable.scss';
import TimetableChildren from './timetable-children';

dayjs.locale('en-us')


export const TimetableGrouped = ({ by }) =>
  by &&
  Object.entries(by).map(([date, shows], i) => (
    <div
      role='presentation'
      className={`
      timetable__group
      ${dayjs().diff(dayjs(date), "week") % 2 !== 0 ? " --variant" : ""}
      ${dayjs().diff(dayjs(date), "day") > 0 ? " --passed" : ""}
    `}>
        <TimetableGroupTitle date={date}/>
        <TimetableChildren shows={shows} key={i}/>
      </div>
    )
  )

export const TimetableGroupTitlePrefix = ({ date }) => {
  const diffWeeks = dayjs().diff(date, "week")
  const diffDays = dayjs().diff(date, "day")

  return (
    <>
      {diffDays > 0 && 'Last '}
      {diffWeeks === 0 && diffDays <= 0 && ' '}
      {diffWeeks === -1 && ' '}
      {diffWeeks === -2 && ' '}
      {diffWeeks < -2 && ' '}
    </>
  );
};

export const TimetableGroupTitleWeekday = ({ date }) => (
  <strong>{dayjs(date).format("dddd")}</strong>
)

export const TimetableGroupTitleSuffix = ({ date }) => (
  <>
    {dayjs().diff(date, "week") < -2 && "in the future"}
  </>
)

export const TimetableGroupTitle = ({ date }) => (
  <div className="timetable__group__title">
    <div className="timetable__group__title__dom">
      <TimetableGroupTitlePrefix date={date}/>
      <TimetableGroupTitleWeekday date={date}/>
      <TimetableGroupTitleSuffix date={date}/>
    </div>

    <div className="timetable__group__title__sub">
      {dayjs(date).format("DD.MM.YYYY")}
    </div>
  </div>
);

export default TimetableGrouped;
