import React from "react"

import Container from "../container"
import Headline from "../headline"
import Paragraph from "../paragraph"
import Section from "../section"

import "./timetable.scss"
import TimetableGrouped from "./timetable-group"
import TimetableWrapper from "./timetable-wrapper"
import useAllShows from "./timetable-hook-all-shows"

export const Timetable = () => {
  const { weekdaysThisAndNextWeek } = useAllShows()

  return (
    <Section title="timetable">
      <Container>
        <Headline title="Timetable"/>
        <Paragraph text="Alle kommenden Sendungen für die nächsten zwei Wochen im Überblick" />
        <TimetableWrapper>
          <TimetableGrouped by={weekdaysThisAndNextWeek} />
        </TimetableWrapper>
      </Container>
    </Section>
  )
}

export default Timetable