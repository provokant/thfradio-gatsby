import React from "react"
import dayjs from "dayjs"
import WaveIcon from "../../images/wave.svg"
import "./timetable.scss"



export const TimetableChild = ({ summary, start, end, uid }) => {
  const TCDate = () => (
    <div className="timetable__child__date">
      {dayjs(start).format("HH:mm")}
      <WaveIcon className="timetable__child__date__icon"/>
      {dayjs(end).format("HH:mm")}
    </div>
  );

  const TCSummary = () => (
    <div className='timetable__child__summary'>{summary}</div>
  );

  const TCContainer = ({ children }) => (
    <div className='timetable__child' key={uid}>
      {children}
    </div>
  );

  return (
    <TCContainer>
      <TCDate />
      <TCSummary />
    </TCContainer>
  );
};

export default TimetableChild;
